import { api, LightningElement } from 'lwc';
import getSingleContact from '@salesforce/apex/ContactController1.getSingleContact';

export default class ChildAsync extends LightningElement 
{
    @api handleParentCall() {
        return getSingleContact()
            .then((result) => {
                return result;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}    
