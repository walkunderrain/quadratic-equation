module.exports =
function solveEquation(equation) {
// equation.replace(/\s+/g, ''));
var first = equation.replace(/\s+/g, '').split('*x^2');
// console.log('first: ', first);
//console.log(first);
var second = first[1].split('*x');
//console.log(second);
var result = [];
result.push(+first[0]);
result.push(+second[0]);
result.push(+second[1]);

//console.log(result);
var D = result[1]^2 - 4*result[0]*result[2];
var sol1 = (-result[1] + Math.sqrt(D))/(2*result[0]);
//console.log(D);
var sol2 = (-result[1] - Math.sqrt(D))/(2*result[0]);
  var solutions = [];
  solutions.push(+sol1);
  solutions.push(+sol2);
  return solutions;
}

// console.log(solveEquation('5 * x ^ 2 + 10 * x - 12'));
