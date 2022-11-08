let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];

/* The .filter is similar to the .map method but instead of changing 
each item of the designated array it will just filter them out based 
on the condition we give, after that it will also return a new array
no matter what.
*/

let bListAnimals = animals.filter((animal) => {
  // Your 'filter' code here.
  //.filter() method to generate a new array 
  //which contains only the animals whose name begins with 'b'.
  return animal.startsWith("b");
});
console.log(bListAnimals);