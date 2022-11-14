import { LightningElement,wire } from 'lwc';
import acclist from '@salesforce/apex/CL_Eg_SearchAcc_Wire_Prop.acclist';
export default class Lwc_eg_SearchAcc_Wire_Prop extends LightningElement 
{
    shtxt;
    searchme(event)
    {
        this.shtxt = event.target.value;
    }
    @wire(acclist,{searchkey:'$shtxt'})Rahul;
}