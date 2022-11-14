public with sharing class gravatarclass {
    @AuraEnabled(cacheable=true)
    public static String getMD5Hash(String email)
    {
        if(String.isEmpty(email)){
            email = 'rahulthangella970@gmail.com';
        }
        Blob emailBlob = Blob.valueOf(email);
        Blob hash = Crypto.generateDigest('MD5', emailBlob);
        return EncodingUtil.convertToHex(hash);
    }
}
