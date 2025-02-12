/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

const dna = "ATTGC"

function dnaStrand(dna){
    // get string
    // turn it into an array
    // let new array 
    // go through arrray
    // replace the letters
    // add to the new array
    const arr = dna.split("")
    let newArr = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] == "A"){
            arr[i] = "T"
        } else if (arr[i] == "T") {
            arr[i] = "A"
        } else if (arr[i] == "C") {
            arr[i] = "G"
        } else if (arr[i] == "G") {
            arr[i] = "C"
        }
        newArr += arr[i]
    }
    return newArr;
  }

  console.log(dnaStrand(dna));
  