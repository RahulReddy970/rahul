import { LightningElement, api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class Lwc_eg_Navigation_Account extends NavigationMixin(LightningElement) 
{
    @api recordId;

    navigateToNewAccount()
    {
        this[NavigationMixin.Navigate]({
            type:'standard_objectPage',
            attributes: {
                objectApiName:'Account',
                actionName: 'new'
            },
        });
    }

    navigateToViewAccount()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes: {
                objectApiName:'Account',
                actionName: 'view',
                recordId: this.recordId
            },
        });
    }

    navigateToEditAccount()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes: {
                objectApiName:'Account',
                actionName: 'edit',
                recordId: this.recordId
            },
        });
    }

    navigateToRelatedList()
    {
        this[NavigationMixin.Navigate]({
            type:'standard_objectPage',
            attributes: {
                objectApiName:'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }

    navigateToList()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes: {
                objectApiName:'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            },
        });
    }

    navigateToHome()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes: {
                pageName: 'home'
            },
        });
    }

    navigateToContactHome()
    {
        this[NavigationMixin.Navigate]({
            type:'standard_objectPage',
            attributes: {
                objectApiName: "Contact",
                actionName: "home"
            },
        });
    }

    navigateToChatterHome()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            },
        });
    }

    navigateToReports()
    {
        this[NavigationMixin.Navigate]({
            type:'standard_objectPage',
            attributes: {
                objectApiName:'Report',
                actionName: 'home'
            },
        });
    }

    navigateToTab()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes: {
                apiName: 'Contact FlipCard'
            },
        });
    }

    navigateToExternalPage()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes: {
                url: "https://www.google.com/"
            },
        });
    }

    navigateToFiles()
    {
        this[NavigationMixin.Navigate]({
            type:'standard_objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        });
    }

    navigateToVFComponent()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes: {
                url: '/apex/MyFirstPage1?id=' + this.recordId
            }
        }).then(generatedUrl => {
            window.open(generatedUrl);
            });
    }

    navigateToAura()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes: {
                componentName: "c__LC_Eg_C1_AccountDisplay"
            }
        });
    }

    navigateNext() 
    
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: this.tabName,
            },
        });
    }

}