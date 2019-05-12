const names = ['igor', 'letícia', 'olokinho'];

if (names.indexOf('olokinho') != -1) {
  console.log('Olokinho meu');
} else {
  console.log('Não tem olokinho :C');
}

if (~names.indexOf('olokinho')) {
  console.log('Olokinho meu');
} else {
  console.log('Não tem olokinho :C');
}