public with sharing class CL_Eg_GetAccounts_Wire 
{
    @AuraEnabled(cacheable=true)
    public static List<Account> accList()
    {
        Return[Select Id, Name, Fax, Type, Rating, Phone , Industry from Account];
    }
    
}
