const name = 'James';
// const abc = 'abc';
// const adfasdf = "sadfas";

const person = { first: name };

console.log(person);

const sayHelloLinting = (fName) => {
  console.log(`Hello linting, ${fName}`);
};

function NewFunction() {
  const abc = true;
  if (abc) {
    console.log(1);
  }
  let a = 0;
  a += 1;
  return a;
}
