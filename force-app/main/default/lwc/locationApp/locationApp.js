import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
// Set Bear object fields
const NAME_FIELD = 'Location__c.Name';
const LOCATION_LATITUDE_FIELD = 'Location__c.Latitude__c';
const LOCATION_LONGITUDE_FIELD = 'Location__c.Longitude__c';
const bearFields = [
	NAME_FIELD,
	LOCATION_LATITUDE_FIELD,
	LOCATION_LONGITUDE_FIELD
];
export default class LocationApp extends LightningElement 
{
    @api recordId;
  name;
  mapMarkers = [];
  @wire(getRecord, { recordId: '$recordId', fields: bearFields })
  loadBear({ error, data }) {
    if (error) {
      // TODO: handle error
    } else if (data) {
      // Get Bear data
      this.name =  getFieldValue(data, NAME_FIELD);
      const Latitude = getFieldValue(data, LOCATION_LATITUDE_FIELD);
      const Longitude = getFieldValue(data, LOCATION_LONGITUDE_FIELD);
      // Transform bear data into map markers
      this.mapMarkers = [{
        location: { Latitude, Longitude },
        title: this.name,
        description: `Coords: ${Latitude}, ${Longitude}`
      }];
    }
  }
  get cardTitle() {
    return (this.name) ? `${this.name}'s location` : 'Location App';
  }
}