import { LightningElement, track, wire, api } from 'lwc';
import getContactList from '@salesforce/apex/example2datatablecontactLC.getContactList';
const columns = [
{label : 'Name', fieldName: 'Name'},
{label : 'Phone', fieldName: 'Phone'}
]

export default class Example2LCDataTableWithRowSelection extends LightningElement {
@track showContacts = 'Show Contacts';
@track isVisible = false;
columns = columns;
@track data =[];
@api recordId; //it stores the current page record Id
@api searchKey='';

//get related contactlist from the apex class
connectedCallback(){
//calling apex method
getContactList({lwcRecordId : this.recordId})
.then( response =>{
this.data = response;
})
.catch(err=>{
console.log("error occured:"+err);
})
}

//search functionality
handleChanged(event){
this.searchKey = event.target.value;
console.log("searchKey:"+ JSON.stringify(this.searchKey))

//send searchkey and record id to apex method
getContactList({ searchKeys : this.searchKey , lwcRecordId : this.recordId})
.then(res =>{
this.data = res;
})
.catch(error=>{
console.log(error);
})
}

//show/hide button toggle functionality 
handleClick(event){
const label = event.target.label;

if(label === 'Show Contacts'){
this.showContacts = 'Hide contacts';
this.isVisible = true;
}
else if(label === 'Hide contacts'){
this.showContacts = 'Show Contacts';
this.isVisible = false;
}
}    

}