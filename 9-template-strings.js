const execFuncArgs = (...args) => args.forEach(arg => {
  if (typeof arg === 'function') {
    arg()
  }
});

execFuncArgs(`Hi, ${() => { console.log('Executed!') }}`);
execFuncArgs`Hi, ${() => { console.log('Executed!') }}`;
