const { decrypt } = require('./encryption')

test('should be equal to "This"', () => {
  expect(decrypt('hsTi', 1)).toBe('This')
})

test('should be equal to "This is a test!"', () => {
  expect(decrypt('This is a test!', 0)).toBe('This is a test!')
})

test('should be equal to "This is a test!"', () => {
  expect(decrypt('hsi  etTi sats!', 1)).toBe('This is a test!')
})

test('should be equal to "This is a test!"', () => {
  expect(decrypt('s eT ashi tist!', 2)).toBe('This is a test!')
})

test('should be equal to "This is a test!"', () => {
  expect(decrypt(' Tah itse sits!', 3)).toBe('This is a test!')
})

test('should be equal to "This is a test!"', () => {
  expect(decrypt('This is a test!', 4)).toBe('This is a test!')
})

test('should be equal to "This is a test!"', () => {
  expect(decrypt('This is a test!', -1)).toBe('This is a test!')
})

test('should be equal to "This kata is very interesting!"', () => {
  expect(decrypt('hskt svr neetn!Ti aai eyitrsig', 1)).toBe('This kata is very interesting!')
})

test('should be null', () => {
  expect(decrypt(null, 1)).toBe(null)
})

