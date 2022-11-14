public with sharing class CL_Eg_SerachContact 
{
    @AuraEnabled(cacheable=true)
    public static List<Contact> findcontacts(string searchkey)
    {
        string sk = '%'+searchkey+'%';
        Return[Select Id, FirstName, LastName, Email, Phone from Contact where FirstName Like:sk];
    }
    
}
