'use strict';
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');
const { compareVersions, findInstall, nodeSupported } = require('../locate');

const INDEX = path.join(__dirname, '..', 'index.js');

/** A fake home with one editor's extensions.json and, per entry, an optional CLI file. */
function makeHome() {
	return fs.mkdtempSync(path.join(os.tmpdir(), 'dbcode-mcp-'));
}

function addEditor(home, dir, entries) {
	const extensionsDir = path.join(home, dir, 'extensions');
	fs.mkdirSync(extensionsDir, { recursive: true });
	const records = [];
	for (const { id = 'dbcode.dbcode', version, cli = true, script } of entries) {
		const relativeLocation = `${id}-${version}`;
		if (cli) {
			const cliPath = path.join(extensionsDir, relativeLocation, 'out', 'cli', 'dbcode');
			fs.mkdirSync(path.dirname(cliPath), { recursive: true });
			fs.writeFileSync(cliPath, script || '');
		}
		records.push({ identifier: { id }, version, relativeLocation });
	}
	fs.writeFileSync(path.join(extensionsDir, 'extensions.json'), JSON.stringify(records));
	return extensionsDir;
}

test('compareVersions orders numerically', () => {
	const cases = [
		['1.38.9', '1.38.10', -1],
		['1.38.10', '1.38.9', 1],
		['1.39.0', '1.38.99', 1],
		['22.14.0', '22.14', 0],
	];
	for (const [a, b, sign] of cases) {
		assert.equal(Math.sign(compareVersions(a, b)), sign, `${a} vs ${b}`);
	}
});

test('nodeSupported gates on 22.14', () => {
	assert.equal(nodeSupported('22.13.1'), false);
	assert.equal(nodeSupported('22.14.0'), true);
	assert.equal(nodeSupported('24.1.0'), true);
});

test('findInstall picks the newest version across editors', () => {
	const home = makeHome();
	addEditor(home, '.vscode', [{ version: '1.38.7' }]);
	const antigravity = addEditor(home, '.antigravity-ide', [{ version: '1.38.9' }]);
	addEditor(home, '.cursor', [{ version: '1.38.8' }]);
	assert.deepEqual(findInstall(home), {
		version: '1.38.9',
		cli: path.join(antigravity, 'dbcode.dbcode-1.38.9', 'out', 'cli', 'dbcode'),
	});
});

test('findInstall prefers the earlier editor on a version tie', () => {
	const home = makeHome();
	const vscode = addEditor(home, '.vscode', [{ version: '1.38.9' }]);
	addEditor(home, '.cursor', [{ version: '1.38.9' }]);
	assert.equal(findInstall(home).cli, path.join(vscode, 'dbcode.dbcode-1.38.9', 'out', 'cli', 'dbcode'));
});

test('findInstall skips installs without the CLI, other extensions, and folders the editor no longer lists', () => {
	const home = makeHome();
	const vscode = addEditor(home, '.vscode', [
		{ version: '1.38.9', cli: false },
		{ id: 'other.extension', version: '9.9.9' },
		{ id: 'DBCode.dbcode', version: '1.38.5' },
	]);
	const leftover = path.join(vscode, 'dbcode.dbcode-1.39.0', 'out', 'cli');
	fs.mkdirSync(leftover, { recursive: true });
	fs.writeFileSync(path.join(leftover, 'dbcode'), '');
	assert.equal(findInstall(home).version, '1.38.5');
});

test('findInstall returns undefined with no editors or an unreadable record', () => {
	const home = makeHome();
	assert.equal(findInstall(home), undefined);
	fs.mkdirSync(path.join(home, '.vscode', 'extensions'), { recursive: true });
	fs.writeFileSync(path.join(home, '.vscode', 'extensions', 'extensions.json'), '{ broken');
	assert.equal(findInstall(home), undefined);
});

function runLauncher(home, args) {
	return spawnSync(process.execPath, [INDEX, ...args], {
		env: { ...process.env, HOME: home, USERPROFILE: home },
		encoding: 'utf8',
	});
}

test('launcher explains how to install DBCode when it is missing, on stderr only', () => {
	const result = runLauncher(makeHome(), []);
	assert.equal(result.status, 1);
	assert.equal(result.stdout, '');
	assert.match(result.stderr, /DBCode is not installed\..*https:\/\/dbcode\.io\/docs\/get-started\/install/);
});

test("launcher runs the install's CLI with mcp and the caller's arguments, and passes its exit code back", () => {
	const home = makeHome();
	addEditor(home, '.vscode', [{ version: '1.38.9', script: 'process.stdout.write(JSON.stringify(process.argv.slice(2))); process.exit(3);' }]);
	const result = runLauncher(home, ['--app', 'Code - Insiders']);
	assert.equal(result.status, 3);
	assert.deepEqual(JSON.parse(result.stdout), ['mcp', '--app', 'Code - Insiders']);
});
