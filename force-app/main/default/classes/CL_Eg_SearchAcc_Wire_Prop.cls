public with sharing class CL_Eg_SearchAcc_Wire_Prop 
{
    @AuraEnabled(cacheable=true)
    public static List<Account> acclist(string searchkey)
    {
        string ss = '%'+searchkey+'%';
        Return[Select Id, Name, Fax, Rating, Industry from Account where Name Like:ss];
    }
    
}
