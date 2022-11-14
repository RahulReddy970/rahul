import { LightningElement,api } from 'lwc';

export default class Lwc_eg_LDS_EditForm extends LightningElement 
{
    @api recordId;
    handleReset(event)
    {
     const inputfields = this.template.querySelectorAll('lightning-input-field');
     inputfields.forEach(field=>{field.reset();});
    }
}