import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import RATING_FIELD from '@salesforce/schema/Account.Rating';



export default class Lds_eg_Account_Creation extends LightningElement 
{
   objectApiName = ACCOUNT_OBJECT;
   fields = [NAME_FIELD,PHONE_FIELD,RATING_FIELD];

   handleSuccess(event)
   {
    const showtoastevent = new ShowToastEvent({
        title:"Account Created",
        message:"Record Id:"+ event.detail.id,
        variant:"success"
        })
        this.dispatchEvent(showtoastevent);
   } 
}