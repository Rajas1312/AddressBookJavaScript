const main=require('./addressbook')
const readLine=require('readline-sync')
let iterator=1;
while(iterator!=0){
    console.log(`1.add aperson 2.display contacts 3.edit contact 4.delete contacts 5.sort contacts 6.find contacts 0.exit`)
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
        case "5":
            main.sortEntries();
            break;
        case "6":
            main.findcontats();
            break;    
        case"0":
            iterator=0;
            console.log("Thank you!")
            break;
        default:
            console.log(`Invalid input`)
    }
}


