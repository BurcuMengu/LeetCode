/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let z =[];
    var y = Array.from(String(x), Number);
    for(var i = y.length - 1; i>= 0; i--) {
        z.push(y[i]);
    }
    if(y.join("") == z.join("")) 
        return true; 
    else 
        return false;

};

isPalindrome(121);

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    
    if (x < 0) return false;
    
    var str = x.toString();
    var reverse = str.split('').reverse('').join('');

    return str === reverse;

};