
const test=require('./addressbook')
let assert = require('chai').assert;
describe('Address Book positive Mocha Test',()=> {
       it('should return true if the name pattern is correct',(done)=> {
       assert.equal(test.checkIfFirstNameIsValid(),"Rajas")
       done();
   }).timeout(15000)
       it('should return true if the city pattern is correct',(done)=> {
       assert.equal(test.checkIfCityNameIsValid(),"Mumbai");
       done();
   }).timeout(15000)
       it('should return true if state pattern is correct',(done)=>{
           assert.equal(test.checkIfStateNameIsValid(),"Maharashtra");
           done();
       }).timeout(15000)
       it('should return true if zip pattern is correct',(done)=>{
           assert.equal(test.checkIfZipIsValid(),"400092");
           done();
       }).timeout(15000)     
});
