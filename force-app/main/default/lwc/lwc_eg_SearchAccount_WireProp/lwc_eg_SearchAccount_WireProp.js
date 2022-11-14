import { LightningElement, wire} from 'lwc';
import acclist from '@salesforce/apex/CL_Eg_SearchAccounts_WireProp.acclist';

export default class Lwc_eg_SearchAccount_WireProp extends LightningElement 
{
    shtxt;
    searchme(event)
    {
        this.shtxt = event.target.value;
    }
    //wire a property
    @wire(acclist,{searchkey:'$shtxt'})Rahul;
}
