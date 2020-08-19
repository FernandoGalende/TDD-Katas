const getArray = (str) => str.split('')

const isPair = (idx) => idx % 2 === 0

const arrToStr = (arr) => arr.join('')

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

const encrypt = (text, n) => {
  if(n <= 0 || !text) return text
  let cont = 0  
  let arr = getArray(text)
  
  while(cont < n){
    cont++
    arr = doEncrypt(arr)
  }

  return arrToStr(arr)
}

const decrypt = (text, n) => {
  if(n <= 0 || !text) return text
  
  let cont = 0  
  let arr = getArray(text)
  
  while(cont < n){
    cont++
    arr = doDencrypt(arr)
  }

  return arrToStr(arr)
}

module.exports = {
  encrypt,
  decrypt
}