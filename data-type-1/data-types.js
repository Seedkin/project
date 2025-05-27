const name = 'Andrey'
const age = 31
const bigInt = -10n
const carOwner = true
const money = null
const profession = undefined
const user = {
    name: 'Andrey',
    age: 31,
    money: null,
}
const id = Symbol('id')

console.log('name', name, typeof name)
console.log('age', age, typeof age)
console.log('bigInte', bigInt, typeof bigInt)
console.log('carOwner', carOwner, typeof carOwner)
console.log('money', money, typeof money)
console.log('profession', profession, typeof profession)
console.log('user', user, typeof user)
console.log('id', id, typeof id)