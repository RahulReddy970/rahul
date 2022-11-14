import { LightningElement } from 'lwc';
import getContactList from '@salesforce/apex/CL_Eg_GiveContacts.getContactList';

export default class LaunchContactFlowFromLWC extends LightningElement 
{
    singleContact;

    connectedCallback()
    {
        getContactList().then((result)=>{
            console.log('result',result);
            this.singleContact = result;
        })
        .catch((error)=>{
           console.log(error);
        });
    }

    get inputvariables()
    {
        return[
            {
                name:'Contact',
                type:'SObject',
                value:this.singleContact
            }
        ];
    }
    
    handleStatusChange(event)
    {
        console.log('handleStatusChange',event.detail);
    }
}