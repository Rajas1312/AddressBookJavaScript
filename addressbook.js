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
        sortEntries=()=>{
            let rawdata = fs.readFileSync('person.json');
            let person = JSON.parse(rawdata,JSON.stringify(file,null,2));
            console.log("sort entries 1.firstName 2.city 3.state 4.zip")
            let options=readLine.question("Enter your option")
            if(options=="1"){
                person.sort((a, b)=>{
                    let x = a.firstName.toLowerCase();
                    let y = b.firstName.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                console.log(person)
                  fs.writeFileSync('person.json',JSON.stringify(person,null,2));
            }
            if(options=="2"){
                person.sort((a, b)=>{
                    let x = a.city.toLowerCase();
                    let y = b.city.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                console.log(person)
                  fs.writeFileSync('person.json',JSON.stringify(person,null,2));
            }
            if(options=="3"){
                person.sort((a, b)=>{
                    let x = a.state.toLowerCase();
                    let y = b.state.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                console.log(person)
                  fs.writeFileSync('person.json',JSON.stringify(person,null,2));
            }
            if(options=="4"){
                person.sort((a, b)=>{
                    let x = a.zip.toLowerCase();
                    let y = b.zip.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                console.log(person)
                  fs.writeFileSync('person.json',JSON.stringify(person,null,2));
            }

        }   
    }
module.exports=new AddressBook();
    
    
    

