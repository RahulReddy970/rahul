import { LightningElement,wire } from 'lwc';
import accList from '@salesforce/apex/CL_Eg_GetAccounts_Wire.accList';

const cl = [
    {label:'Account Name', fieldName:'Name'},
    {label:'Account Fax', fieldName:'Fax'},
    {label:'Account Industry', fieldName:'Industry'},
    {label:'Account Rating', fieldName:'Rating'}
]
export default class Lwc_eg_GetAccounts_Wire extends LightningElement 
{
    colm = cl;
    @wire(accList)rahul;
}