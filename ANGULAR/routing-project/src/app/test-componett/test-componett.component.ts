import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Customer } from '../customer.module';

@Component({
  selector: 'app-test-componett',
  templateUrl: './test-componett.component.html',
  styleUrls: ['./test-componett.component.css']
})
export class TestComponettComponent implements OnInit {

  msg:string=" ";
  constructor(public reg:CustomerServiceService) { }

  ngOnInit(): void {
  }

  addCustomerComponent(customer:Customer)
  {
    console.log(customer);
    this.reg.addCustomer(customer).subscribe(data=>this.msg=data)
  }



}
