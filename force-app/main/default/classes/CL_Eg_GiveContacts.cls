public with sharing class CL_Eg_GiveContacts 
{
    @AuraEnabled(cacheable=true)
    public static Contact getContactList()
    {
        return [SELECT Id, FirstName, LastName, Email, Phone, Birthdate FROM Contact  WITH SECURITY_ENFORCED LIMIT 1];
    }
    
}
