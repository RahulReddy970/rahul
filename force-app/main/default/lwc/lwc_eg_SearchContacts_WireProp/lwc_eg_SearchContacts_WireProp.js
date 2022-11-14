import { LightningElement, wire } from 'lwc';
import findcontacts from '@salesforce/apex/CL_Eg_SearchContacts.findcontacts';

export default class Lwc_eg_SearchContacts_WireProp extends LightningElement 
{
    shtxt;
    searchme(event)
    {
        this.shtxt = event.target.value;
    }
    //wire a property
    @wire(findcontacts,{searchkey:'$shtxt'})Rahul;
}