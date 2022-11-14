import { LightningElement, api} from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';

export default class Lwc_LDS_IMP_DELETE extends NavigationMixin(LightningElement) 
{
    @api recordId;  
    deleteme(event)
    {
        deleteRecord(this.recordId).then(response=>{
            // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home',
            }
        });
        }).catch(error=>{
            alert('Record cannot be deleted due to following'+ error.body.message);
        });
    }
}