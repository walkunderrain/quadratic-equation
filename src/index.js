module.exports =
function solveEquation(equation) {
equation.replace(/\s+/g, '');
var first = equation.replace(/\s+/g, '').split('*x^2');

// console.log('first: ', first);
var second = first[1].split('*x');
// console.log('second: ', second);
// var result = [];
// result.push(parseInt(first[0]));
// result.push(parseInt(second[0]));
// result.push(parseInt(second[1]));
var a = parseInt(first[0]);
var b = parseInt(second[0]);
var c = parseInt(second[1]);



// console.log('result: ', result);
// console.log('a = ', a, 'b = ', b, 'c = ', c);
// var D = result[1]^2 - 4*result[0]*result[2];
var D = b**2 - a*c*4;
// var sol1 = ((-1) * result[1] + Math.sqrt(D))/(2*result[0]);
var x1 = (b - Math.sqrt(D))*(-1) / (a*2);
var x2 = (b + Math.sqrt(D))*(-1) / (a*2);
// var sol2 = ((-1)*result[1] - Math.sqrt(D))/(2*result[0]);
// console.log('x1: ', x1);
// console.log('x2: ', x2);
var solutions = [];
  solutions.push(Math.round(x1));
  solutions.push(Math.round(x2));
  // console.log('solutions: ', solutions);
  return solutions.sort((a,b) => {
    if (a !== b) {
      if (a < b) {
         return -1;
       } else return 1;
     } else return 0;
    //(a !== b) ? ((a < b) ? -1 : 1) : 0;
  });
}

// solveEquation('1 * x ^ 2 + 2 * x - 4');
// solveEquation('294 * x^2 - 141195558 * x - 1600964090384736');
