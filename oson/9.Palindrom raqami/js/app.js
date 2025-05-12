/**
 * @param {number} x
 * @return {boolean}
 */


let isPalindrome = function (x) {
    let son1 = x.toString();
    let son2 = son1.split('').reverse().join('')
    return son1===son2;
};

console.log(isPalindrome(25874));