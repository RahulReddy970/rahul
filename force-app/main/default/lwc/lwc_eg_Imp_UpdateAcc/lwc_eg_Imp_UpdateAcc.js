import { LightningElement, wire, track } from 'lwc';
import accList from '@salesforce/apex/CL_Eg_GetAccounts_Wire.accList';
import { updateRecord } from 'lightning/uiRecordApi';
import nmfld from '@salesforce/schema/Account.Name';
import rtfld from '@salesforce/schema/Account.Rating';
import idsfld from '@salesforce/schema/Account.Industry';
import idfld from '@salesforce/schema/Account.Id';
import {refreshApex} from '@salesforce/apex';

const CL = [
            {label:'Account Name',fieldName:'Name',editable:'true'},
            {label:'Account Rating',fieldName:'Rating',editable:'true'},
            {label:'Account Industry',fieldName:'Industry',editable:'true'}
           ]

export default class Lwc_eg_Imp_UpdateAcc extends LightningElement 
{
    @track colm = CL;
    @track draftValues = [];
    @wire(accList)Rahul;

    handleSave(event)
    {
     const fields = {};
     fields[idfld.fieldApiName] = event.detail.draftValues[0].Id;
     fields[nmfld.fieldApiName] = event.detail.draftValues[0].Name;
     fields[rtfld.fieldApiName] = event.detail.draftValues[0].Rating;
     fields[idsfld.fieldApiName] = event.detail.draftValues[0].Industry;

     const recordInput = {fields};

     updateRecord(recordInput).then(response=>{
                                                 alert('Record updated succesfully');
                                                 this.draftValues = [];
                                                 return refreshApex(this.data);
                                                 }).catch(error=>{
                                                    alert('An error occured while updating'+error.body.message);
                                                 });
    }
}