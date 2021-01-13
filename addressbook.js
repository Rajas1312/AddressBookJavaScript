const fs = require('fs');
let file = require('./person.json')
const readLine=require('readline-sync')
class AddressBook{
    addPerson=()=>{
        let person = {
            "person":[{
                firstName: readLine.question("Enter firstname "),
                lastName: readLine.question("Enter lastname "), 
                city: readLine.question("Enter city "), 
                state: readLine.question("Enter state "),  
                zip: readLine.question("Enter zipcode ") 
            }]
        };
            file = [person.person[0],...file];
            fs.writeFileSync('person.json',JSON.stringify(file,null,2));
        }
        displayContacts=()=>{
            let rawdata = fs.readFileSync('person.json');
            let person = JSON.parse(rawdata,JSON.stringify(file,null,2));
            console.log(person);
            
        }
        editContats=()=>{
            let rawdata = fs.readFileSync('person.json');
            let person = JSON.parse(rawdata,JSON.stringify(file,null,2));
            let firstname=readLine.question("Enter first name ")
            for(let i=0;i<person.length;i++){
                if(person[i].firstName==firstname){
                    person[i].lastName=readLine.question("enter last name ")
                    fs.writeFileSync('person.json',JSON.stringify(person,null,2));
                    person[i].city=readLine.question("enter city ")
                    fs.writeFileSync('person.json',JSON.stringify(person,null,2));
                    person[i].state=readLine.question("enter state ")
                    fs.writeFileSync('person.json',JSON.stringify(person,null,2));
                    person[i].zip=readLine.question("Enter zipode ") 
                    fs.writeFileSync('person.json',JSON.stringify(person,null,2));
                }
            }
        }
        deleteElements=()=>{
            let rawdata = fs.readFileSync('person.json');
            let person = JSON.parse(rawdata,JSON.stringify(file,null,2));
            let firstname=readLine.question("Enter first name ")
            for(let i=0;i<person.length;i++){
                if(person[i].firstName==firstname){
                    person.splice(i,1)
                    fs.writeFileSync('person.json',JSON.stringify(person,null,2)); 
                }
            }
        }
        
    }
module.exports=new AddressBook();
    
    
    

