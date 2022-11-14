public with sharing class CL_GetContactRec_Flip_Card {

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactRecords(Id accountId)
    {
        return [Select Id, FirstName, Email, Phone, Account.Name from Contact where AccountId = :accountId];
    }  
}
