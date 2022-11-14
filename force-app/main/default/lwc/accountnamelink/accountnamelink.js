import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

    
const columns=[



    {label: 'Account Name', fieldName: 'Account_URL', type: 'url', typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'} },
    
    
    
    {label: 'Account Industry', fieldName: 'Industry'},
    
    
    
    {label: 'Account Description', fieldName: 'Description'},
    
    
    
    ];
    
    export default class Accountnamelink extends LightningElement {
    
    
    
        @track error;
    
    
    
        @track columns = columns;
    
    
    
        @track acccList;
    
    
    
        @wire (getAccountList) accList({error, data})
    
    
    
        {
    
    
    
    
            if(data)
    
    
    
            {
    
    
    
                let accParsedData=JSON.parse(JSON.stringify(data));
    
    
    
                let baseUrlOfOrg= 'https://'+location.host+'/';
    
    
    
                accParsedData.forEach(acc => {
    
    
    
                    if(acc.Id){
    
    
    
                    //acc.Parent_Account_Name=acc.Parent.Name;
    
    
    
                    acc.Account_URL=baseUrlOfOrg+acc.Id;
    
    
    
                    }
    
    
    
                });
    
    
    
                this.acccList = accParsedData;
    
    
    
            }
    
    
    
            else if(error)
    
    
    
            {
    
                this.error = error;
    
            }
    
        }
    
    }