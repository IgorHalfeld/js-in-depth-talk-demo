const myLib = {
  whoIsTheChamps: () => console.log('É o Igor <3'),
};

Object.defineProperty(myLib, 'whoIsTheChamps', {
  get: () => () => console.log('É o Igor <3'),
  set: () => {
    console.log('Só o Igor é o champs');
  }
});

myLib.whoIsTheChamps = () => console.log('É o adalberto');

myLib.whoIsTheChamps();