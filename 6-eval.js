const article = {
  comments: {
    user: {
      name: 'Igor Luiz Halfeld',
    }
  }
};

const getProperty = (obj, prop) => {
  const accessor = eval(`obj => obj.${prop}`);
  return accessor(obj);
};

console.log(article.comments.user.name);
console.log(getProperty(article, 'comments.user.name'));