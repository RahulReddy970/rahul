import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Lwc_eg_LDS_Imp_Create extends LightningElement 
{
    @track name;
    @track phone;
    @track rating;
    @track indut;
    
    callnm(event)
    {
        this.name = event.target.value;
    }
    callph(event)
    {
        this.phone = event.target.value;
    }
    callra(event)
    {
        this.rating = event.target.value;
    }
    callind(event)
    {
        this.indut = event.target.value;
    }
    callme(event)
    {
        //step-1 create fields list that you want to save
        const fields = {'Name':this.name,'Phone':this.phone,'Rating':this.rating,'Industry':this.indut};

        //step-2 create object+fields
        const recordData = {apiName:'Account',fields};

        //step-3 call the imperation method
        createRecord(recordData).then(response=>{
        // alert('Account created successfully with account id'+response.id);
        const event = new ShowToastEvent({
                                         title : 'Account Creation',
                                         message : 'Account created successfully with Account Id'+response.id,
                                         variant : 'success'
                                         });
                                         this.dispatchEvent(event);
        }).catch(error=>{
            //alert('Account creation failed with the following error'+error.body.message);
            const event = new ShowToastEvent({
                                            title : 'Account Creation',
                                            message : 'Account creation failed with the following error'+error.body.message,
                                            variant : 'destructive'
                                             })
        });
    }

}