import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { Customer } from '../customer.module';
import { RegistrationService } from '../registration.service';
import * as $ from "jquery";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
msg:string="";
  constructor(public registerService:CustomerServiceService,public router:Router) { }

  ngOnInit(): void {
  }

  addCustomerComponent(customer:Customer)
  {
    this.registerService.addCustomer(customer).subscribe(data=>this.msg=data)
    setTimeout(() => {
      this.router.navigate(["login"])
    }, 1000);
  }
  // {
  //   console.log(customer.cust_name);

  //   let cname = customer.cust_name;
  //   let caddr=customer.cust_addr;
  //   let cphone=customer.cust_phone;
  //   let cust_login=customer.cust_login;
  //   let cpass=customer.pass;
  //   if (cname=='') 
  //    {
  //     $(".invalid-feedback1").show();
  //    }
  //    if (caddr=='') 
  //    {
  //     $(".invalid-feedback2").show();
  //    }
  //    if (cphone=='') 
  //    {
  //     $(".invalid-feedback3").show();
  //    }
  //    if (cust_login=='') 
  //    {
  //     $(".invalid-feedback4").show();
  //    }
  //    if (cpass=='') 
  //    {
  //     $(".invalid-feedback5").show();
  //    }
  //     if (cname!='' ) 
  //    {
  //     $(".invalid-feedback1").hide();
  //    }
  //    if (caddr!='') 
  //    {
  //     $(".invalid-feedback2").hide();
  //    }
  //     if (cphone!='') 
  //    {
  //     $(".invalid-feedback3").hide();
  //    }
  //    if (cust_login!='') 
  //    {
  //     $(".invalid-feedback4").hide();
  //    }
  //    if (cpass!='') 
  //    {
  //     $(".invalid-feedback5").hide();
  //    }

  //     if(cname!='' && caddr!='' && cphone!='' && cust_login!='' && cpass!='')
  //    {
  //     $(".invalid-feedback1").hide();
  //     $(".invalid-feedback2").hide();
  //     $(".invalid-feedback3").hide();
  //     $(".invalid-feedback4").hide();
  //     $(".invalid-feedback5").hide();
  //     this.registerService.addCustomer(customer).subscribe(data=>this.msg=data)
  //     setTimeout(() => {
  //       this.router.navigate(["login"])
  //     }, 2000);
      
  //    }

   

  onpress(){

    this.router.navigate(["login"])
  }

  onClickHome(){
    this.router.navigate([""]);
  }

  loginRedirect(){
    this.router.navigate(["login"])
  }

}
