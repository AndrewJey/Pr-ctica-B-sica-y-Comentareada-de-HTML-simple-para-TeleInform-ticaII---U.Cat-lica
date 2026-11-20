import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const html = fs.readFileSync(path.join(root, 'Practica1.html'), 'utf8');

test('Practica1.html is valid responsive HTML5 preserving original educational comments and data', () => {
  assert.match(html, /^<!DOCTYPE html>/i);
  assert.match(html, /<meta[^>]+name="viewport"/i);
  assert.match(html, /Ya programo HTML/);
  assert.match(html, /Andrés Joseph/);
  assert.match(html, /La Abundancia de San Carlos/);
  assert.match(html, /rel="noopener noreferrer"/);
  assert.ok(!/<font\b|<center\b/i.test(html));
  assert.ok(html.trim().endsWith('</html>') || html.trim().endsWith('<!-- Cierre del archivo HTML -->'));
});
