const strToArray = (str) => str.split('')

const isPair = (idx) => idx % 2 === 0

const arrToStr = (arr) => arr.join('')

const getArrayof = (length) => [...Array(length).keys()]

const getInteger = (value) => Math.max(0, value)

const doEncrypt = (arr) => {
  let odds = []
  let evens = []

  arr.forEach((item, idx) => {
    isPair(idx) ? odds = [...odds, item] : evens = [...evens, item]
  },[])
  
  return [...evens, ...odds]
}

const doDencrypt = (arr) => {
  let odds = arr.slice(0,arr.length/2)
  let evens = arr.slice(arr.length/2)
  let solution = []

  arr.forEach((_, idx) => {    
    if(!isPair(idx)){
      solution = [...solution, odds[0]]
      odds = odds.slice(1)
    } else {
      solution = [...solution, evens[0]]
      evens = evens.slice(1)
    }
  })
  
  return [...solution]
}

const loopEncription = (text, times, cb) => {
  let arr = strToArray(text)

  getArrayof(getInteger(times)).forEach(() => {
    arr = cb(arr)
  })

  return arrToStr(arr)
}

const encrypt = (text, n) => {
  if(!text) return text

  return loopEncription(text, n, doEncrypt)
}

const decrypt = (text, n) => {
  if(!text) return text  

  return loopEncription(text, n, doDencrypt)
}

module.exports = {
  encrypt,
  decrypt
}