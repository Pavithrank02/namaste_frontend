const data = [{
  name: "pavi",
  age: 27

},
{
  name: "pavigh",
  age: 28

},
{
  name: "pavithr",
  age: 25

},
{
  name: "pavith",
  age: 24

},
{
  name: "pavit",
  age: 26

},]
function sortingAge() {
  const sort = data.sort((a, b) => a.age - b.age)
  return sort
}

console.log(sortingAge())

module.exports = sortingAge