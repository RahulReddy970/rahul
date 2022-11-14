import { LightningElement } from 'lwc';

export default class Lwc_eg_lwcevent_declaratively extends LightningElement 
{
    handleme(event)
    {
        const mye = new CustomEvent('myEvent');
        this.dispatchEvent(mye);
    }
}