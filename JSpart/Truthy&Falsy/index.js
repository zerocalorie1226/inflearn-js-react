/* //Truthy int, string, Infinity
let a = Infinity;

if (a) {
  console.log("true");
} else {
  console.log("false");
}

//Falsy none, "", null
let b = null;

if (b) {
  console.log("true");
} else {
  console.log("false");
}
 */

const getName = (person) => {
  if (!person) {
    return "객체가 아닙니다.";
  }
  return person.name;
};
let person;
const name = getName(person);

console.log(name);
