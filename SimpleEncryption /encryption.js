const {
  arrToStr,
  getArrayof,
  getInteger,
  isPair,
  pipe,
  strToArray
} = require('../utils')

const doEncrypt = (arr) => {
  let odds = []
  let evens = []

  arr.forEach((item, idx) => {
    isPair(idx) ? odds = [...odds, item] : evens = [...evens, item]
  })
  
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
      return 
    } 

    solution = [...solution, evens[0]]
    evens = evens.slice(1)    
  })
  
  return [...solution]
}

const loopEncription = (times, cb) => (text) =>  {
  const length = getInteger(times)
  let arr = [...text]

  getArrayof(length).forEach(() => {
    arr = cb(arr)
  })

  return arr
}

const encrypt = (text, times) => {
  if(!text) return text  

  return pipe(text)(strToArray, loopEncription(times, doEncrypt), arrToStr)
}

const decrypt = (text, times) => {
  if(!text) return text   

  return pipe(text)(strToArray, loopEncription(times, doDencrypt), arrToStr)
}

module.exports = {
  encrypt,
  decrypt
}