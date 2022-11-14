import { LightningElement } from 'lwc';

export default class Lwc_eg_variables extends LightningElement 
{
    name='Rahul';
    callme(event)
    {
        alert('This is my first ES module program-csc')
        this.name='Rohith';
    }
}