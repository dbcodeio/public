'use strict';
/**
 * Finds the newest installed DBCode extension across VS Code and its forks.
 * Each editor's extensions.json is its own record of what is installed, so
 * folders an update or uninstall left behind on disk are never picked.
 */
const fs = require('fs');
const path = require('path');

const EXTENSION_ID = 'dbcode.dbcode';
const MIN_NODE = '22.14.0';

/** Extension folders under the home directory, in tie-break order. */
const EXTENSION_DIRS = [
	'.vscode',
	'.vscode-insiders',
	'.cursor',
	'.windsurf',
	'.kiro',
	'.antigravity-ide',
	'.antigravity',
	'.vscode-oss',
];

function compareVersions(a, b) {
	const pa = String(a).split('.').map(Number);
	const pb = String(b).split('.').map(Number);
	for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
		const diff = (pa[i] || 0) - (pb[i] || 0);
		if (diff !== 0) {
			return diff;
		}
	}
	return 0;
}

function nodeSupported(version) {
	return compareVersions(version, MIN_NODE) >= 0;
}

function readInstalled(extensionsDir) {
	let entries;
	try {
		entries = JSON.parse(fs.readFileSync(path.join(extensionsDir, 'extensions.json'), 'utf8'));
	} catch (err) {
		// No editor here, or an unreadable record: nothing installed to offer.
		return [];
	}
	if (!Array.isArray(entries)) {
		return [];
	}
	const installs = [];
	for (const entry of entries) {
		const id = entry && entry.identifier && entry.identifier.id;
		if (typeof id !== 'string' || id.toLowerCase() !== EXTENSION_ID || typeof entry.relativeLocation !== 'string') {
			continue;
		}
		const cli = path.join(extensionsDir, entry.relativeLocation, 'out', 'cli', 'dbcode');
		if (fs.existsSync(cli)) {
			installs.push({ version: String(entry.version), cli });
		}
	}
	return installs;
}

/** The newest DBCode install that ships the CLI, or undefined. */
function findInstall(home) {
	let best;
	for (const dir of EXTENSION_DIRS) {
		for (const install of readInstalled(path.join(home, dir, 'extensions'))) {
			if (!best || compareVersions(install.version, best.version) > 0) {
				best = install;
			}
		}
	}
	return best;
}

module.exports = { MIN_NODE, compareVersions, findInstall, nodeSupported };
