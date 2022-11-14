import { LightningElement } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/MyMsgChannel__c';
import { publish, subscribe, unsubscribe, createMessageContext, releaseMessageContext } from 'lightning/messageService';

export default class LMSLWC extends LightningElement 
{
    //Variables 
    receivedMessage;
    subscriptionToMC;
    myMessage;
    context = createMessageContext();

    handleChange(event)
    {
        this.myMessage = event.target.value;
    }
    publishMC(event)
    {
        const message = {
                         messageToSend : this.myMessage,
                         sourceSystem : 'From LMS',
                         senderName : 'Rohith'
                        };
                        publish(this.context,SAMPLEMC,message);
    }
    subscribeMC(event)
    {
        if(this.subscriptionToMC)
        {
            return;
        }
        this.subscriptionToMC = subscribe(this.context,SAMPLEMC,(message)=>{this.displayMessage(message)});
    }
    displayMessage(message)
    {
        this.receivedMessage = message ? JSON.stringify(message,null,'\t'):'no message payload';
    }
    unsubscribeMC(event)
    {
        unsubscribe(this.subscriptionToMC);
        this.subscriptionToMC = null;
    }
    disconnectedCallback()
    {
        releaseMessageContext(this.context);
    }
}