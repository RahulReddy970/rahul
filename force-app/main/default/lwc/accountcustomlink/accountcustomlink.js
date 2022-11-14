import { LightningElement, track } from 'lwc';
import accList from '@salesforce/apex/CL_Eg_GetAccounts_Wire.accList';
const COLUMNS = [
    {
        label: 'Name', fieldName: 'AccountURL', type: 'url',
        typeAttributes: {
            label: {
                fieldName: 'Name'
            }
        }
    },
    {label: 'Type', fieldName: 'Type', type: 'text'},
    {label: 'Phone', fieldName: 'Phone', type: 'phone', 
        cellAttributes: { 
            iconName: 'utility:phone_portrait' 
        }
    }
];

export default class CustomLink extends LightningElement {
    @track lstAccounts;
    lstColumns = COLUMNS;

    connectedCallback(){
        accList().then(response => {
            this.lstAccounts = response;
            if(this.lstAccounts){
                this.lstAccounts.forEach(item => item.AccountURL=== '/lightning/r/Account/' +item.Id +'/view');
                
            }
        }).catch(error => {
            console.log('Error: ' +error);
        });
    }
}