/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  // iterate over tokens and create stack for integers
  // when you hit an operand, pop off last 2 num in stack and evaluate expression
  // Then PUSH evaluated val to the stack and continue

  let integers = [];
  let operands = ["+", "-", "*", "/"];

  for (let token of tokens) {
      if (operands.includes(token)) {
          let x = integers.pop();
          let y = integers.pop();
          integers.push(evaluate(x, y, token));
      } else {
          integers.push(token)
      }
  }
  return integers[0];
};

function evaluate(x, y, operand) {
  x = Number(x);
  y = Number(y);

  if (operand === "+") {
      return y + x;
  } else if (operand === "-") {
      return y - x;
  } else if (operand === "*") {
      return y * x;
  } else if (operand === "/") {
      return parseInt(y / x);
  }
}
