const fs = require('fs');
let file = require('./person.json')
const readLine=require('readline-sync')
const name_pattern="^[A-Z]{1}[a-z]{2,}$";
const zip_pattern="^[0-9]{6}$";
class AddressBook{
    addPerson=()=>{
        let firstName=this.checkIfFirstNameIsValid()//readLine.question("Enter first name "));
        let lastName=this.checkIfLastNameIsValid()//readLine.question("Enter last name "));
        let city=this.checkIfCityNameIsValid()//readLine.question("Enter city "));
        let state=this.checkIfStateNameIsValid()//readLine.question("Enter state "));
        let zip=this.checkIfZipIsValid()//readLine.question("Enter zip code "));
        let person = {
            "person":[{
                firstName:firstName,//this.checkIfFirstNameIsValid(),
                lastName:lastName, //this.checkIfLastNameIsValid(), 
                city:city, //this.checkIfCityNameIsValid(), 
                state:state, //this.checkIfStateNameIsValid(),  
                zip: zip 
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
            let firstname=this.checkIfFirstNameIsValid()//readLine.question("Enter first name "))
            for(let i=0;i<person.length;i++){
                if(person[i].firstName==firstname){
                    console.log(person[i])
                    console.log("edit 1.lastname 2.city 3.state 4.zipcode")
                    let option=readLine.question("choose a option ")
                    switch(option){
                        case "1":
                            person[i].lastName= this.checkIfLastNameIsValid()//readLine.question("Enter last name "))
                            fs.writeFileSync('person.json',JSON.stringify(person,null,2));
                            break;
                        case "2":
                            person[i].city= this.checkIfCityNameIsValid()//readLine.question("enter city "))
                            fs.writeFileSync('person.json',JSON.stringify(person,null,2));
                            break;
                        case "3":
                            person[i].state= this.checkIfStateNameIsValid()//readLine.question("enter state "))
                            fs.writeFileSync('person.json',JSON.stringify(person,null,2));
                            break;
                        case "4":
                            person[i].zip=this.checkIfZipIsValid()//readLine.question("Enter zipode ")) 
                            fs.writeFileSync('person.json',JSON.stringify(person,null,2));
                            break;
                        default:
                            console.log("invalid option")
                            break;
                    }
                    console.log(person[i])
                }
            }
        }
        deleteElements=()=>{
            let rawdata = fs.readFileSync('person.json');
            let person = JSON.parse(rawdata,JSON.stringify(file,null,2));
            let firstname=this.checkIfFirstNameIsValid()//readLine.question("Enter first name "))
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
        findcontats=()=>{
            let rawdata = fs.readFileSync('person.json');
            let person = JSON.parse(rawdata,JSON.stringify(file,null,2));
            console.log("find entries by 1.firstName 2.city 3.state 4.zip")
            let options=readLine.question("Enter your option ")
            if(options=="1"){
                let firstName=this.checkIfFirstNameIsValid()//readLine.question("Enter firstName "))
                for(let i=0;i<person.length;i++){
                    if(person[i].firstName==firstName){
                        console.log(person[i])
                    }
                }
            }
            if(options=="2"){
                let city=this.checkIfCityNameIsValid()//readLine.question("Enter city "))
                for(let i=0;i<person.length;i++){
                    if(person[i].city==city){
                        console.log(person[i])
                    }
                }
            }
            if(options=="3"){
                let state=this.checkIfStateNameIsValid()//readLine.question("Enter state "))
                for(let i=0;i<person.length;i++){
                    if(person[i].state==state){
                        console.log(person[i])
                    }
                }
            }
        }  
        checkIfFirstNameIsValid=()=>{
            let name=readLine.question("Enter a first name ")
            if(name.match(name_pattern)){
                console.log("Valid Name")
                return name;
            }else{
                console.log("Invaid Name")
                return this.checkIfFirstNameIsValid()
                }
            }
        checkIfLastNameIsValid=()=>{
            let name=readLine.question("Enter a last name ")
            if(name.match(name_pattern)){
                console.log("Valid Name")
                return name
            }else{
                console.log("Invaid Name")
               return this.checkIfLastNameIsValid()
                }    
            }
        checkIfCityNameIsValid=()=>{
            let name=readLine.question("Enter a city name ")
            if(name.match(name_pattern)){
                console.log("Valid Name")
                return name
            }else{
                console.log("Invaid Name")
                return this.checkIfCityNameIsValid()
                }       
            }
        checkIfStateNameIsValid=()=>{
            let name=readLine.question("Enter a state name ")
            if(name.match(name_pattern)){
                console.log("Valid Name")
                return name
            }else{
                console.log("Invaid Name")
                return this.checkIfStateNameIsValid()
                }       
            }
        checkIfZipIsValid=()=>{
            let zip=readLine.question("Enter a Zip Code ")
            if(zip.match(zip_pattern)){
                console.log("valid Zip Code")
                return zip;
            }else{
                console.log("invalid Zip Code")
                return this.checkIfZipIsValid();
                }
            }
        
    }
module.exports=new AddressBook();
    
    
    

