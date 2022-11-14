public with sharing class CL_Eg_SearchAccounts_WireProp 
{
    @AuraEnabled(cacheable=true)
    public static List<Account> acclist (string searchkey)
    {
        string sk = '%'+searchkey+'%';
        Return[Select Id, Name, Industry, Rating, Phone from Account where Name Like:sk];
    }
  
}
