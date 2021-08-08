const assert = require ('assert')
const Rooster = require('../index')

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
const expected = 'cock-a-doodle-doo!';
const actual = Rooster.announceDawn
assert.ok(actual, expected)
    })
  })

describe('.timeAtDawn', () => {
  it('returns its argument as a string', () => {
  const input = 6  
 const expected = '6'
 const actual = Rooster.timeAtDawn(input)

 assert.strictEqual(actual, expected)
  })

 it('throws an error if passed a number less than 0', () => {
   assert.throws(
     () => { 
    Rooster.timeAtDawn(-1) 
   },
   RangeError
   );
 })

  it('throws an error if passed a number greater than 23', () => {
 assert.throws(
     () => { 
    Rooster.timeAtDawn(24) 
   },
   RangeError
   );
 })

})
 })