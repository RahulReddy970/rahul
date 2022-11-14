import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class Pubsubpublisher extends LightningElement 
{
    postme(event)
    {
        //step-1 create/compose the message
        let message= {
                     "Message" : "This message is from publisher via pubsub",
                     "Name" : "Rahul",
                     "Phone" : "999999"
                     }
                     pubsub.fire('eventnotify',message);
    }
}