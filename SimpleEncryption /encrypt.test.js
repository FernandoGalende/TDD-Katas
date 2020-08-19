const { encrypt } = require('./encryption')

test('should be equal to "hsTi"', () => {
  expect(encrypt('This', 1)).toBe('hsTi')
})

test('should be equal to "This is a test!"', () => {
  expect(encrypt('This is a test!', 0)).toBe('This is a test!')
})

test('should be equal to "hsi  etTi sats!"', () => {
  expect(encrypt('This is a test!', 1)).toBe('hsi  etTi sats!')
})

test('should be equal to "s eT ashi tist!"', () => {
  expect(encrypt('This is a test!', 2)).toBe('s eT ashi tist!')
})

test('should be equal to " Tah itse sits!"', () => {
  expect(encrypt('This is a test!', 3)).toBe(' Tah itse sits!')
})

test('should be equal to "This is a test!"', () => {
  expect(encrypt('This is a test!', 4)).toBe('This is a test!')
})

test('should be equal to "This is a test!"', () => {
  expect(encrypt('This is a test!', -1)).toBe('This is a test!')
})

test('should be equal to "hskt svr neetn!Ti aai eyitrsig"', () => {
  expect(encrypt('This kata is very interesting!', 1)).toBe('hskt svr neetn!Ti aai eyitrsig')
})

test('should be null', () => {
  expect(encrypt(null, 1)).toBe(null)
})
