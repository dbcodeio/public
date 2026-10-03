#!/usr/bin/env node
'use strict';
/**
 * Entry point for `npx @dbcode/mcp`: hands the agent's stdio to the installed
 * DBCode extension's MCP server. stdout carries the MCP protocol, so every
 * message from this launcher goes to stderr.
 */
const { spawn } = require('child_process');
const os = require('os');
const { MIN_NODE, findInstall, nodeSupported } = require('./locate');

function fail(message) {
	process.stderr.write(`${message}\n`);
	process.exit(1);
}

if (!nodeSupported(process.versions.node)) {
	fail(`DBCode's MCP server needs Node ${MIN_NODE} or newer; this is Node ${process.versions.node}.`);
}

const install = findInstall(os.homedir());
if (!install) {
	fail(
		'DBCode is not installed. Install the DBCode extension in VS Code, Cursor, Windsurf, Antigravity or Kiro ' +
			'(https://dbcode.io/docs/get-started/install), then restart your agent.',
	);
}

const child = spawn(process.execPath, [install.cli, 'mcp', ...process.argv.slice(2)], { stdio: 'inherit' });
for (const signal of ['SIGINT', 'SIGTERM']) {
	process.on(signal, () => child.kill(signal));
}
child.on('error', (err) => fail(`Could not start DBCode's MCP server: ${err.message}`));
child.on('exit', (code) => process.exit(code === null ? 1 : code));
