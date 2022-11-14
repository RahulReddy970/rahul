import { LightningElement } from 'lwc';

export default class Loops extends LightningElement 
{
    lstAccounts = [
        {
            Id : '101',
            Name : 'Cristiano Ronaldo'
        },
        {
            Id : '102',
            Name : 'Lionel Messi'
        },
        {
            Id : '103',
            Name : 'Sachin Tendulkar'
        }
    ];
    constructor(){
        super();
        // 1. Basic For Loop
        for(let i=0; i<this.lstAccounts.length; i++){
            console.log(this.lstAccounts[i].Name);
        }
        // 2. forEach Method
        this.lstAccounts.forEach(function(acc){
            console.log(acc.Name);
        });
        // 3. forEach Array Function
        this.lstAccounts.forEach(acc =>{
            console.log(acc.Name);
        });
        // 4. For...IN loop
        // eslint-disable-next-line guard-for-in
        for(let acc in this.lstAccounts){
            console.log(this.lstAccounts[acc].Name);
        }
        // 5. For...Of loop
        for(let acc of this.lstAccounts){
            console.log(acc.Name);
        }
    }
}