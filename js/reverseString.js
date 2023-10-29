// reverseString.js

function reverseString(string) {
    /**
     * string: a string to be reversed
     * returns: the string but in reverse order
     * 
     * ex: string = "hello"     return: "olleh"
     */

    let resultString = "";            // to hold our reversedSttring
    for (let i = string.length - 1; i >= 0; i--) {
        // decrement through each index of string until empty and append those indexs to resultString
        resultString += string[i];     
    }
    return resultString;
}

module.exports = reverseString;