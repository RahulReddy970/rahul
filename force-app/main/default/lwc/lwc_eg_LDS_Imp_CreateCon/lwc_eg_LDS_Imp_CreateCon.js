import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class Lwc_eg_LDS_Imp_CreateCon extends LightningElement 
{
    @track fname;
    @track lname;
    @track emle;
    @track phne;

    callfnm(event)
    {
     this.fname = event.target.value;
    }
    calllnm(event)
    {
      this.lname = event.target.value;  
    }
    callem(event)
    {
      this.emle = event.target.value;  
    }
    callph(event)
    {
      this.phne = event.target.value;
    }
    callsv(event)
    {
        const fields = {'FirstName': this.fname,'LastName':this.lname,'Email':this.emle,'Phone':this.phne};
        const recordData = {apiName:'Contact',fields};
        createRecord(recordData).then(response=>{
            alert('Contact created successfully with Contact Id'+response.id);
        }).catch(error=>{
            alert('Contact creation failed with following error'+error.body.message);
        })
    }

}