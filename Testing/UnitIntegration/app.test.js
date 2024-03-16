const sortingAge = require('./app')

test('testing the sorting feature for pavith', () => {
  const sortedData = sortingAge()
  expect(sortedData[0].name).toBe("pavith")
})
test('testing the sorting feature for pavigh', () => {
  const sortedData = sortingAge()
  expect(sortedData[sortedData.length - 1].name).toBe("pavigh")
})