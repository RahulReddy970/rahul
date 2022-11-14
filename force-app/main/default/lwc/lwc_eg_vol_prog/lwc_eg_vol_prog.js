import { LightningElement } from 'lwc';

export default class Lwc_eg_vol_prog extends LightningElement 
{
    incme(event)
    {
        const ev1 = new CustomEvent('evtinc',{detail:'volume',bubbles:true,composed:true});
        this.dispatchEvent(ev1);
    }
    decme(event)
    {
        this.dispatchEvent(new CustomEvent('evtdec',{detail:'volume',bubbles:true,composed:true}));
    }
}