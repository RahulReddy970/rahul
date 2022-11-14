import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const FIELDS = [
    'Opportunity.Name',
    'Opportunity.Amount',
    'Opportunity.StageName',
    'Opportunity.Probability'
];

export default class Lwc_GetRecord_Opp extends LightningElement 
{
 @api recordId = '0065g00000DSfgSAAT';
 @wire(getRecord,{recordId:'$recordId',fields:FIELDS})Opp;

 get name()
 {
   return this.Opp.data.fields.Name.value;
 }
 get amount()
 {
   return this.Opp.data.fields.Amount.value;
 }
 get stagename()
 {
   return this.Opp.data.fields.StageName.value;
 }
 get probability()
 {
    return this.Opp.data.fields.Probability.value;
 }
}