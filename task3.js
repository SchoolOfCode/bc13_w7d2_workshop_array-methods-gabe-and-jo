let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];
    // check if someNumbers is multiples of 3
     const timesThree = someNumbers.some((number) => {
                return number%3 === 0;
     });
     console.log(timesThree);

     // check if someNumbers is multiples of 5
     const timesFive = someNumbers.some((number) => {
        return number%5 === 0;
     });
     console.log(timesFive);

     // check if someNumbers is multiples of 60
     const timesSixty = someNumbers.some((number) => {
        return someNumbers%60 === 0;
     });
     console.log(timesSixty);

     
     // check if someNumbers is multiples of 90
     const timesNinety = someNumbers.some((number) => {
        return someNumbers%90 === 0;
     });
     console.log(timesNinety);

