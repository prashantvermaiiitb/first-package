/**
 * Addition function for the Math Lib
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function add(a, b) {
    if (a && b) return a + b;
    else if (a || b) return a || b;
    throw new Error('invalid input to the function..');
}

module.exports = add;