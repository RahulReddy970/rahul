import { LightningElement } from 'lwc';
import LightningModal from 'lightning/modal';

export default class MyModal extends LightningModal(LightningElement) 
{
    createAccount()
    {
      this.template.querySelector('lightning-record-edit-form').submit();
    }

    handleSuccess(event)
    {
      const createdRecord = event.detail.id;
      console.log('onsuccess:' ,createdRecord);
      this.close(createdRecord);
    }
}