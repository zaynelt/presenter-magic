public with sharing class fileListController {
    
    @auraEnabled
    public static List<ContentDocument> showUserFiles(String userId){
        return [SELECT Id, Title FROM ContentDocument WHERE OwnerId = :userId AND ContentAssetId = NULL];
    }
}
