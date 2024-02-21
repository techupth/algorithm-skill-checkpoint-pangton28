// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
    let reverse =''
    for (let i = 0; i < str.length; i++) {
        reverse = str[i] + reverse
    }
    return reverse === str
};
console.log(palindrome("abba"));
console.log(palindrome("abcdefg"));