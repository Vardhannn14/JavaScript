//Code 1: Declare and print 3 students' names using variables




// //javascriptCopy code
// var name1 = "Shreyansh";
// var name2 = "Shrey";
// var name3 = "ansh";
// console.log(typeof Element);
// console.log(name2);
// console.log(name3);

let mixedArray = [42, 'Hello', true, null, undefined, { name: 'Alice' }, [1, 2, 3]];

mixedArray.forEach((element) => {
    console.log(`Value: ${element}, Type: ${typeof element}`);
});