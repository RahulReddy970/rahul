public with sharing class AccountController1 
{
    @AuraEnabled
    public static Account getSingleAccount()
    {
        return[SELECT Id,Name,Industry,Rating FROM Account  WITH SECURITY_ENFORCED LIMIT 1];
    }
}
