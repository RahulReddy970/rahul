public with sharing class CL_Eg_SearchContacts 
{
   @AuraEnabled(cacheable=true)
   public static List<Contact> findcontacts(string searchkey)
   {
    string sk = '%'+searchkey+'%';
    Return[Select id, FirstName, LastName, Email, Phone from Contact where FirstName Like:sk];
   }
}