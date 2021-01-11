const fs = require('fs');
const readLine=require('readline-sync')
addPerson=()=>{
    let person = { 
        firstName: readLine.question("Enter firstname "),
        lastName: readLine.question("Enter lastname "), 
        city: readLine.question("Enter city "), 
        state: readLine.question("Enter state "),  
        zip: readLine.question("Enter zipcode ")  
        };
    let data = JSON.stringify(person,null,2);
    fs.writeFileSync('person.json', data);
    }
    addPerson();
    

