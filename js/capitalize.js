// capitalize.js

function capitalize(string) {
    /**
     * string: parameter of a string to be passed to capitlize
     * returns: the same 'string' with a Capital letter
     */
    let s = string[0].toUpperCase();                // uppercase to the first char of string
    for (let i = 1; i < string.length; i++) {       // append the remaining letters of string to s
        s += string[i];
    }
    return s;
}

module.exports = capitalize;