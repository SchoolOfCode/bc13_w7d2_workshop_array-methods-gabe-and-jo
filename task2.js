let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter((animal) => {
  // Your 'filter' code here.
  //.filter() method to generate a new array 
  //which contains only the animals whose name begins with 'b'.
  return animal.startsWith("b");
});
console.log(bListAnimals);