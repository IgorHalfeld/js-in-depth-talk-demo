const loko = {
  olokinho: 'meu'
};

const isThereOlokinhoKeyword = () => 
  Object.keys(loko).includes('olokinho');

if (isThereOlokinhoKeyword()) {
  console.log('olokinho meu');
}

if ('olokinho' in loko) {
  console.log('olokinho meu');
}
