import { LightningElement } from 'lwc';

export default class Lwc_event_dec_flipkart extends LightningElement 
{
    addmeee(event){ 

        const incc = new CustomEvent('evnticc'); 
  
        this.dispatchEvent(incc);  
  
      } 
}