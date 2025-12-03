// recap api concept, intro to json
console.log('explore api')
const person ={
    nam: 's',
    fruit: 'a',
    dish: 'halim',
    friends: ['alim','selim','dalim'],
    isRich: false,
    money: 349999
}
console.log(person)
// json-> js object with notation
const personJson = JSON.stringify(person)
console.log(personJson, typeof personJson)
const perseJson = JSON.parse(personJson)
console.log(perseJson, typeof perseJson)