const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'dashboard');

const replacements = [
  { regex: /text-white(?![\w/-])/g, repl: 'text-gray-900' },
  { regex: /text-zinc-400/g, repl: 'text-gray-500' },
  { regex: /text-zinc-300/g, repl: 'text-gray-600' },
  { regex: /text-zinc-500/g, repl: 'text-gray-500' },
  { regex: /bg-white\/5/g, repl: 'bg-white' },
  { regex: /bg-white\/10/g, repl: 'bg-gray-100' },
  { regex: /bg-white\/\[0\.02\]/g, repl: 'bg-gray-50' },
  { regex: /border-white\/10/g, repl: 'border-gray-200' },
  { regex: /border-white\/5/g, repl: 'border-gray-200' },
  { regex: /bg-black\/10/g, repl: 'bg-gray-50' },
  { regex: /bg-black\/40/g, repl: 'bg-gray-100' },
  { regex: /from-zinc-800 to-white/g, repl: 'from-primary/20 to-primary' },
  { regex: /group-hover:from-zinc-700 group-hover:to-zinc-200/g, repl: 'group-hover:from-primary/30 group-hover:to-primary/80' },
  { regex: /bg-zinc-800\/50/g, repl: 'bg-gray-100' },
  { regex: /bg-zinc-900\/50/g, repl: 'bg-gray-50' },
  { regex: /bg-zinc-800/g, repl: 'bg-gray-200' },
  { regex: /bg-zinc-900/g, repl: 'bg-gray-100' },
  { regex: /border-zinc-700/g, repl: 'border-gray-300' },
  { regex: /border-zinc-800/g, repl: 'border-gray-200' },
];

function processDir(d) {
  const files = fs.readdirSync(d);
  for (const file of files) {
    const fullPath = path.join(d, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('layout.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      for (const {regex, repl} of replacements) {
        content = content.replace(regex, repl);
      }

      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${fullPath}`);
    }
  }
}

processDir(dir);
