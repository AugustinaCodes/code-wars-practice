// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

arr = [5, 3, 9, 1]
arr2 = [1, 2, 3, 4]

function grow(x){
    // if need sorting into ordered array
    // const orderedArr = x.sort((a, b) => a - b);
    // let sum = orderedArr[0];
    // // solution for this exercise:

    // for (i = 1; i < orderedArr.length; i++){
    //     sum *= orderedArr[i]
    // }
    // return sum;

    // OR
    return x.reduce((a, b) => a * b,1)

}
console.log(grow(arr2));
