const user = {
  name: 'Igor Luiz Halfeld',
  value: 10
};

const reativeUser = new Proxy(user, {
  get(target, property) {
    return target[property];
  },
  set(target, property, newValue) {
    if (property === 'value') {
      target[property] = newValue.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' });
      return;
    }
    target[property] = newValue;
  }
});

console.log(user);
reativeUser.value = 100;
console.log(reativeUser);