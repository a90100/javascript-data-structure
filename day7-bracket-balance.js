function peek(stack) {
  return stack[stack.length - 1]
}

function isBalanced(str) {
  let stack = []
  let OPENING = '([{'
  let CLOSEING = ')]}'

  for (let i = 0; i < str.length; i++) {
    if (OPENING.includes(str[i])) {
      stack.push(str[i])
    } else if (CLOSEING.includes(str[i])) {
      let top = peek(stack);
      if (OPENING.indexOf(top) === CLOSEING.indexOf(str[i])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0
}

console.log('true cases:')
console.log(isBalanced("()"))
console.log(isBalanced("foo(aa[i], {bar: [0,12]})"))
console.log()

console.log('false cases:')
console.log(isBalanced("("))
console.log(isBalanced(")"))
console.log(isBalanced(")("))
console.log(isBalanced("(()"))
console.log(isBalanced("())"))
console.log(isBalanced("foo(3 * ((1 + 4) / 2)"))