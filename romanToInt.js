/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    var a = {
        "I": 1,
        "V": 5, 
        "X": 10, 
        "L": 50, 
        "C": 100, 
        "D": 500, 
        "M": 1000
    };

    var sum = 0;
    for(var i = 0; i<s.length; i++ ) {
        if(i+1 < s.length && a[s[i]] < a[s[i+1]] ) {
            sum -= a[s[i]];
        } else {
            sum += a[s[i]];
        }
    }
    return sum;
    
}

romanToInt("MCMXCIV");