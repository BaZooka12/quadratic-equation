module.exports = function solveEquation(equation) {
  let a, b, c, D;

  let aReg = /^-?[0-9]+/;
  let result = aReg.exec(equation);
  a = +result[0];

  let bReg = /(\-\s[0-9]+|\+\s[0-9]+)/;
  let result2 = bReg.exec(equation);
  b = +result2[0].replace(/\s/g, '');

  let cReg = /(\-\s[0-9]+$|\+\s[0-9]+$)/;
  let result3 = cReg.exec(equation);
  c = +result3[0].replace(/\s/g, '');

  D = Math.pow(b, 2) - 4 * a * c;

  let x1 = Math.round( (-b - Math.sqrt(D)) / (2 * a) );
  let x2 = Math.round( (-b + Math.sqrt(D)) / (2 * a) );

  let roots = [x1, x2].sort((a, b) => a-b);
  return roots;
}
