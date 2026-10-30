import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';
for (const dir of ['css', 'webfonts']) {
  mkdirSync(`vendor/fontawesome/${dir}`, { recursive: true });
  const files = dir === 'css' ? ['all.min.css'] : readdirSync('node_modules/@fortawesome/fontawesome-free/webfonts');
  for (const file of files) copyFileSync(`node_modules/@fortawesome/fontawesome-free/${dir}/${file}`, `vendor/fontawesome/${dir}/${file}`);
}
copyFileSync('node_modules/@fortawesome/fontawesome-free/LICENSE.txt', 'vendor/fontawesome/LICENSE.txt');
console.log('Vendored Font Awesome assets and license.');
