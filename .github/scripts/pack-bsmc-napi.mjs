// .github/scripts/pack-bsmc-napi.mjs
// Usage: node pack-bsmc-napi.mjs <version>
// Downloads the npm tarball, extracts package/prebuilds/<t>.node, and repacks each as
// better-sqlite3-multiple-ciphers-v<version>-<t>.tar.gz laid out so strip:2 yields better_sqlite3.node.
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, renameSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const version = process.argv[2];
if (!version) throw new Error('version required');
const pkgDir = 'packages/better-sqlite3';
const work = 'bsmc-work';
rmSync(work, { recursive: true, force: true });
mkdirSync(work, { recursive: true });

const tarball = execFileSync('npm', ['view', `better-sqlite3-multiple-ciphers@${version}`, 'dist.tarball']).toString().trim();
execFileSync('curl', ['-sL', tarball, '-o', join(work, 'pkg.tgz')]);
execFileSync('tar', ['xzf', join(work, 'pkg.tgz'), '-C', work, 'package/prebuilds']);

for (const f of readdirSync(join(work, 'package/prebuilds'))) {
	const target = f.replace(/\.node$/, ''); // e.g. darwin-arm64, linuxmusl-x64
	// Layout a/b/better_sqlite3.node so the extension's strip:2 yields better_sqlite3.node.
	const stage = join(work, 'stage', 'a', 'b');
	rmSync(join(work, 'stage'), { recursive: true, force: true });
	mkdirSync(stage, { recursive: true });
	renameSync(join(work, 'package/prebuilds', f), join(stage, 'better_sqlite3.node'));
	const out = join(pkgDir, `better-sqlite3-multiple-ciphers-v${version}-${target}.tar.gz`);
	execFileSync('tar', ['czf', out, '-C', join(work, 'stage'), 'a']);
	console.log('packed', out);
}
