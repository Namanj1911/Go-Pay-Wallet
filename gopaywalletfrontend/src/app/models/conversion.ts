export class Conversion {
    constructor(
        public conversionId? : Number,
        public baseCurrency?: String,
        public amountConverted?: Number,
        public newCurrency?: String,
        public newAmount?: Number,
        public username?: String,
        public dateOfTransfer?: String,
        public time?:String
    ) {}
}
