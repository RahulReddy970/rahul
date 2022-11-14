public with sharing class AccountController 
{
    @AuraEnabled(cacheable=true)

    public static list<Account> getAccountList()
    {
        list<Account> acclist = new list<Account>();

        acclist = [SELECT id,Name,Industry,Description from Account Limit 10];

        return acclist;

    } 
    
}
