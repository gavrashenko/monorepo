const first = require('@monorepo/first');
const second = require('@monorepo/second');
const third = require('@monorepo/three');

const app = () => 'Hi from the app';

const main = () => {
  console.log(app());
  console.log(first());
  console.log(second());
  console.log(third());
};

main();

module.exports = { app, main };
