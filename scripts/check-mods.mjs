#!/usr/bin/env node
/**
 * Verify that every mod in payloads/mods is complete enough to install and to
 * be picked up by the Claude Mods crawler.
 *
 * Checks per mod:
 *   - .claude-plugin/plugin.json exists, parses, and has name/version/description/author/license
 *   - plugin.json name matches the folder name
 *   - hooks/hooks.json exists, parses, and lists at least one module
 *   - every listed module file exists
 *   - README.md exists
 *   - LICENSE or LICENSE.md exists
 *
 * Also checks the repository-level LICENSE and THIRD_PARTY_NOTICES.md.
 *
 * Usage: node scripts/check-mods.mjs
 * Exit code 1 when anything is missing.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const modsRoot = join(repo, 'payloads', 'mods');
const failures = [];
let checked = 0;

const isDir = (p) => existsSync(p) && statSync(p).isDirectory();
const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));

function fail(rel, message) {
  failures.push(`${rel}: ${message}`);
}

if (!existsSync(join(repo, 'LICENSE'))) fail('repo', 'missing LICENSE');
if (!existsSync(join(repo, 'THIRD_PARTY_NOTICES.md'))) fail('repo', 'missing THIRD_PARTY_NOTICES.md');

for (const category of readdirSync(modsRoot).filter((d) => isDir(join(modsRoot, d)) && !d.startsWith('.'))) {
  for (const name of readdirSync(join(modsRoot, category)).filter((d) => isDir(join(modsRoot, category, d)))) {
    const dir = join(modsRoot, category, name);
    const rel = `${category}/${name}`;
    checked++;

    const pluginPath = join(dir, '.claude-plugin', 'plugin.json');
    if (!existsSync(pluginPath)) {
      fail(rel, 'missing .claude-plugin/plugin.json');
    } else {
      try {
        const plugin = readJson(pluginPath);
        for (const field of ['name', 'version', 'description', 'license']) {
          if (!plugin[field]) fail(rel, `plugin.json missing "${field}"`);
        }
        if (!plugin.author || !(plugin.author.name || typeof plugin.author === 'string')) {
          fail(rel, 'plugin.json missing author.name');
        }
        if (plugin.name && plugin.name !== name) {
          fail(rel, `plugin.json name "${plugin.name}" does not match folder "${name}"`);
        }
      } catch (error) {
        fail(rel, `plugin.json does not parse: ${error.message}`);
      }
    }

    const hooksPath = join(dir, 'hooks', 'hooks.json');
    if (!existsSync(hooksPath)) {
      fail(rel, 'missing hooks/hooks.json');
    } else {
      try {
        const hooks = readJson(hooksPath);
        const modules = Array.isArray(hooks.modules) ? hooks.modules : [];
        if (modules.length === 0) fail(rel, 'hooks.json lists no modules');
        for (const module of modules) {
          const modulePath = module.startsWith('.') ? join(dir, 'hooks', module) : join(dir, module);
          if (!existsSync(modulePath)) fail(rel, `hooks.json module missing: ${module}`);
        }
      } catch (error) {
        fail(rel, `hooks.json does not parse: ${error.message}`);
      }
    }

    if (!existsSync(join(dir, 'README.md'))) fail(rel, 'missing README.md');
    if (!existsSync(join(dir, 'LICENSE')) && !existsSync(join(dir, 'LICENSE.md'))) {
      fail(rel, 'missing LICENSE or LICENSE.md');
    }
  }
}

if (failures.length > 0) {
  console.error(`FAIL ${failures.length} problem(s) across ${checked} mods:\n`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(`OK ${checked} mods: plugin.json, hooks, modules, README, LICENSE all present.`);
console.log('OK repository LICENSE and THIRD_PARTY_NOTICES.md present.');
