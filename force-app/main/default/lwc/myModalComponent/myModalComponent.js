import { LightningElement } from 'lwc';
import MyModal from 'c/myModal';

export default class MyModalComponent extends LightningElement 
{
    result;

    async openAccountModal()
    {
        this.result = await MyModal.open({
            size: 'medium',
            description: 'Gets the Account data and creates Account record'
        });
        console.log(this.result);
    }
}