import { LightningElement,api, track } from 'lwc';
export default class Lwc_eg_DataBinding2 extends LightningElement 
{
    @api Myname = "Rahul" ;
    @api LastName = "Reddy" ;
    handlechange(event)
    {
        this.Myname=event.target.value;
        this.LastName=event.target.value;
    } 
}