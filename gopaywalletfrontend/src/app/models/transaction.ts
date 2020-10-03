export class Transaction {
    constructor(
        public trasactionId?: Number,
        public accountTransferredto?: String,
        public amountTransferred?: String,
        public currencyUsed?: String,
        public transactionCategory?: String,
        public username?: String,
        public status?: String, 
        public dateOfTransfer?: String,
        public time?: String
    ) {}
}
