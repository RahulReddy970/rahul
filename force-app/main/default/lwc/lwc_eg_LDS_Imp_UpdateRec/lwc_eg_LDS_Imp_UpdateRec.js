import { LightningElement, wire, track} from 'lwc';
import getContactList from '@salesforce/apex/CL_Eg_GiveContacts.getContactList';
import { updateRecord } from 'lightning/uiRecordApi';
import fstnamefld from '@salesforce/schema/Contact.FirstName';
import lstnamefld from '@salesforce/schema/Contact.LastName';
import idfld from '@salesforce/schema/Contact.Id';
import {refreshApex} from '@salesforce/apex';

const CL = [
            {label:'First Name',fieldName:'FirstName',editable:true},
            {label:'Last Name',fieldName:'LastName',editable:true},
            {label:'Email',fieldName:'Email',type:'email'},
            {label:'Phone',fieldName:'Phone',type:'phone'}
           ]

export default class Lwc_eg_LDS_Imp_UpdateRec extends LightningElement 
{
    @track colm = CL;
    @track draftValues = [];
    @wire(getContactList)Rahul;
    
    handlesave(event)
    {
        //step-1 create the data to updated
        const fields = {};
        fields[idfld.fieldApiName] = event.detail.draftValues[0].Id;
        fields[fstnamefld.fieldApiName] = event.detail.draftValues[0].FirstName;
        fields[lstnamefld.fieldApiName] = event.detail.draftValues[0].LastName;

        //step-2 object+fields
        const recordInput = {fields};

        //step-3 call the imperation
        updateRecord(recordInput).then(response=>{
                                                 alert('Record updated succesfully');
                                                 this.draftValues = [];
                                                 return refreshApex(this.data);
                                                 }).catch(error=>{
                                                    alert('An error occured while updating'+error.body.message);
                                                 });
    }
}