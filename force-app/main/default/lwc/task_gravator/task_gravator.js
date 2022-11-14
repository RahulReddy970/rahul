import { LightningElement, track } from 'lwc';

export default class Task_gravator extends LightningElement 
{
    @track  size = 150;
    @track  email;
    @track isround;
    updateEmail (event){
        //Check if email is valid or not using OOB LWC support
        if(event.target.validity.valid){ 
             this.email = event.target.value;
        } 
    }
    updateBorder(event){
        this.isround = event.target.checked;  
    }
    updateSize(event){
        this.size = event.target.value; 
    } 
}