/**
 * @name arrToStr
 * Parse from array to string
 * @public
 * @param {string[]} arr - The array to convert
 * @returns {string}
 */
const arrToStr = (arr) => arr.join('')

/**
 * @name getArrayof
 * Get an array of idicated lenght with each index as value
 * @public
 * @param {number} length - The length of the array
 * @returns {Array}
 */
const getArrayof = (length) => [...Array(length).keys()]

/**
 * @name getInteger
 * Get an integer with zero as min value
 * @public
 * @param {number} value - The integer to check
 * @returns {number}
 */
const getInteger = (value) => Math.max(0, value)

/**
 * @name isPair
 * Check if is pair
 * @private
 * @param {number} idx - the number to check is pair
 * @returns {boolean}
 */
const isPair = (idx) => idx % 2 === 0

/**
 * @name pipe
 * Functional composition to apply each function over one result one by one.
 * @private
 * @param {*} value - The value you want to transform
 * @param {requestCallback} fns - The number of functions to apply over the value
 * @returns {boolean}
 */
const pipe = (value) => (...fns) => fns.reduce((acc, fn)=> fn(acc),value)

/**
 * @name strToArray
 * Parse a string in to array
 * @private
 * @param {string} str - The string to be parsed.
 * @returns {string[]}
 */
const strToArray = (str) => str.split('')

module.exports = {
  arrToStr,
  getArrayof,
  getInteger,
  isPair,
  pipe,
  strToArray
}