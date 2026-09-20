const fs = require('fs');
if (process.argv.length !== 3) {
  console.error('Usage: node fancyCat.js <file>');
  process.exitCode = 1;
  return;
}
try {
  const data = fs.readFileSync(process.argv[2], 'utf8');
  process.stdout.write(data);
  if (data.length > 0 && !data.endsWith('\n')) console.log();
  const lines = data.split('\n').length - 1;
  console.log('Lines (wc -l): ' + lines);
} catch (error) {
  console.error('Cannot read file: ' + error.code);
  process.exitCode = 1;
}
