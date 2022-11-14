import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/CL_Eg_GiveContacts.getContactList';

const cl = [
    {label:'First Name',fieldName:'FirstName'},
    {label:'Last Name',fieldName:'LastName'},
    {label:'Phone',fieldName:'Phone',type:'phone'},
    {label:'Email',fieldName:'Email',type:'email'}
];
export default class Lwc_eg_WIRE_GetContacts extends LightningElement 
{
 colm = cl;
 @wire(getContactList)rahul;
}