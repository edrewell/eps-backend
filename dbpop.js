var l1 = [2, 3, 4]
var l2 = [5, 6, 7]

l1.reverse()
l2.reverse()

console.log(l1, l2)

var n1 = l1.join('')
var n2 = l2.join('')
console.log(n1, n2)

var total = Number(n1) + Number(n2)
console.log(total)

var totalToArray = Array.from(String(total), Number)
console.log(totalToArray.reverse())
