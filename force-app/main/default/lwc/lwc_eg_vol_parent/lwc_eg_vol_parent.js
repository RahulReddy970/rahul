import { LightningElement } from 'lwc';

export default class Lwc_eg_vol_parent extends LightningElement 
{
    contrl;
    contrlval;
    constructor()
    {
        super();
        this.template.addEventListener('evtinc',this.handleinc.bind(this));
        this.template.addEventListener('evtdec',this.handledec.bind(this));
    }
    handleinc(event)
    {
     this.contrl = event.detail;
     this.contrlval = this.contrlval+1;
    }
    handledec(event)
    {
        this.contrl = event.detail;
        this.contrlval = this.contrlval-1;
    }
}