

export class Order
{
    constructor(public order_id?:number, public items?:number, public amount?:number, public bill_id?:number,
         public cust_id?:number, public order_date?:Date)
    {};
}