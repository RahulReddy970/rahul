import { LightningElement, api, track } from 'lwc';

export default class Lwc_eg_DataBinding extends LightningElement 
{
    @api firstname="hello";
    handlechange(event)
    {
     console.log(this.firstname);
    }
}