import { LightningElement, api } from 'lwc';
import { FlowNavigationFinishEvent } from 'lightning/flowSupport';
import { NavigationMixin } from 'lightning/navigation';

export default class LwcinFlow extends NavigationMixin(LightningElement) {
    @api contactId;
    @api availableActions = [];
    handleSuccess(event) {
        this.contactId = event.detail.id;
        this.NavigateToRecord();
    }

    handleClick() {
        if (this.availableActions.find((action) => action === 'FINISH')) {
            // navigate to the next screen
            const navigateNextEvent = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }

    NavigateToRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contactId,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }
}