const main=require('./addressbook')
const readLine=require('readline-sync')
console.log(`1.add aperson 2.display contacts 3.edit contact 4.delete contacts`)
let options=readLine.question("Select the option ")
switch(options){
    case "1":
        main.addPerson();
        break;
    case "2":
        main.displayContacts();
        break;
    case "3":
        main.editContats();
        break;
    case "4":
        main.deleteElements();
        break;

    default:
        console.log(`Invalid input`)
}


