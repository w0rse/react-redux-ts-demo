console.log('run');

const tsc = require('typescript');
const config = require('./tsconfig.json');

console.log(config);

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(src, {
          module: tsc.ModuleKind.CommonJS,
          jsx: tsc.JsxEmit.React,
        }, path, []);
    }
    return src;
  },
};