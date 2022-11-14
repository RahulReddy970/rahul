import { LightningElement, api, wire } from 'lwc';
import getContactRecords from '@salesforce/apex/CL_GetContactRec_Flip_Card.getContactRecords';
export default class lwc_contact_flip_card extends LightningElement 
{
    @api recordId;
    @wire(getContactRecords, {accountId : '$recordId'}) contactData;

    handleAccountId(event){
        let accountId = event.detail.value[0];
        this.recordId = accountId;
    }

    addClass(event){
        let index = event.currentTarget.dataset.rowIndex;
        let flipElement = this.template.querySelector('[data-id="' + index + '"]');
        flipElement.classList.add('class1');
    }

    removeClass(event){
        let index = event.currentTarget.dataset.rowIndex;
        let flipElement = this.template.querySelector('[data-id="' + index + '"]');
        flipElement.classList.remove('class1');
    }
}