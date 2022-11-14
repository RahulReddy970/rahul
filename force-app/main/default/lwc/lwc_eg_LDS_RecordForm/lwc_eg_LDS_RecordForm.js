import { LightningElement,api} from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name'
import Account_Phone from '@salesforce/schema/Account.Phone'
import Account_Fax from '@salesforce/schema/Account.Fax'
import Account_Rating from '@salesforce/schema/Account.Rating'
export default class Lwc_eg_LDS_RecordForm extends LightningElement 
{
    @api recordId;
    myFields=[Account_Name,Account_Phone,Account_Fax,Account_Rating];
}