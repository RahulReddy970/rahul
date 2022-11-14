import { LightningElement, wire, track} from 'lwc';
import accList from '@salesforce/apex/CL_Eg_GetAccounts_Wire.accList';
import { updateRecord } from 'lightning/uiRecordApi';
import fstnamefld from '@salesforce/schema/Account.Name';
import rtgfld from '@salesforce/schema/Account.Rating';
import idfld from '@salesforce/schema/Account.Id';
import {refreshApex} from '@salesforce/apex';

const CL = [
            {label:'Name',fieldName:'Name',editable:true},
            {label:'Rating',fieldName:'Rating',editable:true} 
           ]

export default class Lwc_eg_LDS_Imp_UpdateRec extends LightningElement 
{
    @track colm = CL;
    @track draftValues = [];
    @wire(accList)Rahul;
    
    handlesave(event)
    {
        //step-1 create the data to updated
        const fields = {};
        fields[idfld.fieldApiName] = event.detail.draftValues[0].Id;
        fields[fstnamefld.fieldApiName] = event.detail.draftValues[0].Name;
        fields[rtgfld.fieldApiName] = event.detail.draftValues[0].Rating;
       
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