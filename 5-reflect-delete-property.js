const creditCard = {
  number: '4444 4444 4444 4444',
  name: 'Igor Luiz Halfeld'
};

const wasDeleted = Reflect.deleteProperty(creditCard, 'name');

if (wasDeleted) {
  console.log('Olokinho meu!');
}