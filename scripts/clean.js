const sh = require('shelljs');
const path = require('path');

const docsPath = path.resolve(path.dirname(__filename), '../docs');
const distPath = path.resolve(path.dirname(__filename), '../dist');

// Remove docs directory
sh.rm('-rf', docsPath);

// Remove dist directory
sh.rm('-rf', distPath);
