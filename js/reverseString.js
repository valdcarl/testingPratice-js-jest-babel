// reverseString.js

function reverseString(string) {
    /**
     * string: a string to be reversed
     * returns: the string but in reverse order
     * 
     * ex: string = "hello"     return: "olleh"
     */
    return string.split("").reverse().join("");
    
}

module.exports = reverseString;