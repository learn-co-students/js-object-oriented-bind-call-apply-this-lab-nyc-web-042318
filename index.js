function justInvoke(func) {
  return func()
}

function setThisWithCall(fn, thisValue, args) {
  return fn.call(thisValue, args)
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const fn = functionToBeCopied
  return fn.bind(thisValue)
}

