/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('');
};

console.log(isPalindrome(212));
console.log(isPalindrome(456));