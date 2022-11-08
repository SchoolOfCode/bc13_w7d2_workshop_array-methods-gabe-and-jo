const cats = ["tony", "daisy", "socks", "rockie" ];
// your code here
// a function that takes in a string and turns it to uppercase
// .map() method to generate a new array

const capitalisedCats = cats.map((cat) => {
    return cat.toUpperCase();
});
console.log(capitalisedCats);