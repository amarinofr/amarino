function splitText (text) {
  const innerText = text.innerHTML
  const textArray = [...innerText]

  let result = ''

  textArray.forEach(function (char) {
    result += '<span><span>' + char + '</span></span>'
  })

  text.innerHTML = result
}

function splitWords (words) {
  const innerWords = words.innerHTML

  const wordsSplit = innerWords.split(' ')

  let result = ''

  wordsSplit.forEach(function (char) {
    result += '<span><span>' + char + '</span></span>'
  })

  words.innerHTML = result
}

export { splitText, splitWords }
