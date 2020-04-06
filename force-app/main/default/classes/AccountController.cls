public class AccountController {

  private List<Account> accounts;
   public List<Account> getAccounts() {
        return this.getAllActiveAccounts();
    }

  public List<Account> getAllActiveAccounts() {
    this.accounts = [SELECT Id,Name,Active__c FROM Account WHERE Active__c = 'Yes'];
    return this.accounts;
  }
}