import { LightningElement, api } from 'lwc';

export default class Lwc_eg_DataBinding3 extends LightningElement 
{
    @api name="Rohith";
    handlechange(event)
    {
        this.name = event.target.value;
    }
}