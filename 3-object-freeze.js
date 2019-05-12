const creditCard = Object.freeze({
  number: '4444 4444 4444 4444',
  name: 'Igor Luiz Halfeld'
});

creditCard.number = 'Hack!';

console.log(creditCard);