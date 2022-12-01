
export class Stock{
    constructor(public stock_id?:number, public item_name?:string, public expiry?:Date,
        public quantity?:number, public price?:number, public type?:string )
    {};
}