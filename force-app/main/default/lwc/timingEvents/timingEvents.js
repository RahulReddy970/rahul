import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class TimingEvents extends LightningElement 
{
  timeSpan = 5000;
  event1;
  event2;
  connectedCallback() 
  {
    this.triggerEventOnce();
    this.triggerEventContinuously();
  }
  triggerEventOnce() 
  {
    let message =
      "I will trigger only once after " + this.timeSpan + " milliseconds.";
    this.event1 = setTimeout(() => {
      this.customMessage(message);
    }, this.timeSpan);
  }
  triggerEventContinuously() 
  {
    let message =
      "I will trigger again after " + this.timeSpan + " milliseconds.";
    this.event2 = setInterval(() => {
      this.customMessage(message);
    }, this.timeSpan);
  }
  customMessage(customMessage) 
  {
    this.dispatchEvent(
      new ShowToastEvent({
        title: "Notification",
        message: customMessage,
        variant: "success"
      })
    );
  }
  handleStop() 
  {
    console.log("🚀 ~ handleStop");
    this.dispatchEvent(
      new ShowToastEvent({
        title: "Stopping Timing Events",
        message: "Timing events has been stopped!",
        variant: "success"
      })
    );
    clearTimeout(this.event1);
    clearInterval(this.event2);
  }
}