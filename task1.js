const cats = ["tony", "daisy", "socks", "rockie" ];
// your code here
// a function that takes in a string and turns it to uppercase
// .map() method to generate a new array


// Here we create a variable ("capitalisedCats") and assing it to 
// whatever comes back from the .map array method.

/* The .map method consists in creating an anonymous function 
 that takes one argument, we named it "cat" but it's value will
 come from the iteration of each item on "cats" array, defined at the top*/

/*After that we need only to transform each item iterated to 
uppercase and return it, doing that the .map method will create
another array with the values it found, beyond storing it into 
the capitalizedCats variable */ 
const capitalisedCats = cats.map((cat) => {
    return cat.toUpperCase();
});
console.log(capitalisedCats);