export class Transaction {
  AccountNo;
  Date;
  Transaction_Details;
  Value_Date;
  Withdrawal_AMT;
  Deposit_AMT;
  Balance_AMT;

  public Transaction(
    AccountNo,
    Date,
    Transaction_Details,
    Value_Date,
    Withdrawal_AMT,
    Deposit_AMT,
    Balance_AMT
  ) {
    this.AccountNo = AccountNo;
    this.Date = Date;
    this.Transaction_Details = Transaction_Details;
    this.Value_Date = Value_Date;
    this.Withdrawal_AMT = Withdrawal_AMT;
    this.Deposit_AMT = Deposit_AMT;
    this.Balance_AMT = Balance_AMT;
  }
}
