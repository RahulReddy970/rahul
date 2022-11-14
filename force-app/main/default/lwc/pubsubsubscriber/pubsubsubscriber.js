import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class Pubsubsubscriber extends LightningElement 
{
    message;
    connectedCallback()
    {
        this.register();
    }
    register()
    {
        pubsub.register('eventnotify',this.handleEvent.bind(this));
    }
    handleEvent(messageFromEvent)
    {
        this.message = messageFromEvent?JSON.stringify(messageFromEvent,null,'\t'):'no message payload';
    }
}