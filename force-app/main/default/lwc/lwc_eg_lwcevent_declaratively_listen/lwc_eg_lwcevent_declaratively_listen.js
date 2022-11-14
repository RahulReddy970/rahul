import { LightningElement } from 'lwc';

export default class Lwc_eg_lwcevent_declaratively_listen extends LightningElement 
{
    callme(event)
    {
        alert('Hi, i heard the event');
    }
}