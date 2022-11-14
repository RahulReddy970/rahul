public with sharing class BoatDataService 
{
    @AuraEnabled(cacheable=true)
    public static List<Boat__c> getBoats(String boatTypeId)
    {
        List<Boat__c> allBoats = [SELECT Name,Description__c,Geolocation__c,Length__c,Picture__c,Price__c,Year_Built__c,BoatType__c,BoatType__r.Name,Contact__r.Name FROM Boat__c];
         
        if (String.isNotBlank(boatTypeId))
        {
            allBoats = [SELECT Name,Description__c,Geolocation__c,Length__c,Picture__c,Price__c,Year_Built__c,BoatType__c,BoatType__r.Name,Contact__r.Name FROM Boat__c WHERE BoatType__c =: boatTypeId with SECURITY_ENFORCED];
        }
        return allBoats;
    }

    @AuraEnabled(cacheable=true)
    public static List<Boat__c> getSimilarBoats(Id boatId,String similarBy)
    {
        List<Boat__c> allSimilarBoats = new List<Boat__c>();
        List<Boat__c> allParentBoats = [
            SELECT Id,Length__c,Price__c,BoatType__c,BoatType__r.Name
            FROM Boat__c
            WHERE Id =: boatId
            WITH SECURITY_ENFORCED
        ];
        return allSimilarBoats;
    }

    @AuraEnabled(cacheable=true)
    public static List<BoatType__c> getBoatTypes()
    {
        return[SELECT Id,Name FROM BoatType__c WITH SECURITY_ENFORCED];
    }

    @AuraEnabled(cacheable=false)
    public static List<BoatReview__c> getAllReviews(Id boatId)
    {
        return[SELECT Id,Name,Comment__c,Rating__c FROM BoatReview__c WHERE Boat__c =:boatId WITH SECURITY_ENFORCED];
    }

    @AuraEnabled(cacheable=true)
    public static String getBoatsByLocation(String boatTypeId)
    {
        String thisLocation = 'SELECT Name,Geolocation__c FROM Boat__c';
        if(String.isNotBlank(boatTypeId))
        {
            thisLocation = 'SELECT Name,Geolocation__c FROM Boat__c WHERE BoatType__c =:boatTypeId WITH SECURITY_ENFORCED';
        }
        return JSON.serialize(Database.query(thisLocation));
    }

    @AuraEnabled(cacheable=true)
    public static String updateBoatList(Object data){
        List<Boat__c> boatsForUpdate = (List<Boat__c>) JSON.deserialize(
            JSON.serialize(data),
            List<Boat__c>.class
        );
        
        update boatsForUpdate;
        return 'Success: Boats updated successfully';
    }
}
