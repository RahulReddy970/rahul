import { LightningElement } from 'lwc';
import getSingleAccount from '@salesforce/apex/AccountController1.getSingleAccount';

export default class LaunchFromFlow extends LightningElement 
{
    singleAccount;

    connectedCallback()
    {
        getSingleAccount().then((result)=>{
            console.log('result',result);
            this.singleAccount = result;
        })
        .catch((error)=>{
           console.log(error);
        });
    }

    get inputvariables()
    {
        return[
            {
                name:'account',
                type:'SObject',
                value:this.singleAccount
            }
        ];
    }
    
    handleStatusChange(event)
    {
        console.log('handleStatusChange',event.detail);
    }

}