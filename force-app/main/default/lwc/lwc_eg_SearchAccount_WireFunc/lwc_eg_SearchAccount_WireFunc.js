import { LightningElement, wire } from 'lwc';
import acclist from '@salesforce/apex/CL_Eg_SearchAccounts_WireProp.acclist';

export default class Lwc_eg_SearchAccount_WireFunc extends LightningElement 
{
    reccc;
    errr;
    shtxt;
    searchme(event)
    {
        this.shtxt = event.target.value;
    }
    //wire a function 
    @wire(acclist,{searchkey:'$shtxt'})Rahulfun({error,data})
                                               {
                                                if(data)
                                                {
                                                    this.recc = data;
                                                }
                                                else if(error)
                                                {
                                                    this.error = error;
                                                }
                                               }
        
    
}