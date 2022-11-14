import { LightningElement, wire, track } from 'lwc';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import PROJECT_OBJECT from '@salesforce/schema/Project__c'
import FIELD_VALUE from '@salesforce/schema/Project__c.Programmingcourses__c'

export default class MultiSelectPicklist extends LightningElement 
{
    lstSeltd=[];
    @track lstOptns=[];

    //Get ObjectInfo
    @wire(getObjectInfo,{objectApiName:PROJECT_OBJECT})Rahul;

    //Get FieldInfo
    @wire(getPicklistValues,{recordTypeId:'$Rahul.data.defaultRecordTypeId',fieldApiName:FIELD_VALUE})
    languages(data, error)
    {
        if(data && data.data && data.data.values){
            data.data.values.forEach( objPicklist => {
                this.lstOptns.push({
                    label: objPicklist.label,
                    value: objPicklist.value
                });
            });
        } 
        else if(error)
        {
            console.log(error);
        }
    }

    handleChange(event) {
        this.lstSeltd = event.detail.value;
    }
}