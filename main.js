/* Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started! */

// step 1
let input = "turpentine and turtles";

//step 2
const vowels = ["a", "e", "i", "o", "u"];

//step 3
let resultArray = [];

//step 4
for (let i = 0; i < input.length; i++) {
    //step 5
    // console.log(input[i])

    //step 10 / 11
    if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]);
    }

    //step 6
    for (let j = 0; j < vowels.length; j++) {
        //step 7
        // console.log(j);

        //step 8
        if (input[i] === vowels[j]) {
            resultArray.push(input[i])
        }

    }
}

//step 12
console.log(resultArray)

//step 13
let resultString = resultArray.join("").toUpperCase();
console.log(resultString)
