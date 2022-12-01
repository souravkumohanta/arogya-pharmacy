import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.module';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
// import { $ } from 'protractor';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string="";
  customer = new Customer();
  customer1=new Customer();
  constructor(public router:Router,public reg_service:RegistrationService){ }
  
onclickregister(){
  this.router.navigate(['register'])
}

onClickHome(){
  this.router.navigate([""])
}

 

  ngOnInit() :void {
   
  }
    //this.reg_service.loginFromRemote().subscribe()
   
    register()
    {
      this.router.navigate(["register"]);
    }


      loginUser(userData:any)
      {

        let user=userData.cust_login;
        console.log("cu login", user);
        let pass=userData.pass;
        let desig=userData.desg;
        console.log(user+" "+pass);
 
        this.customer.cust_login=user;
        this.customer.pass=pass;

        var cradio =$('input[name="desg"]:checked').val();
        console.log("cradio", cradio);

    
          if (user=='' && pass=='')
          {  
            $(".invalid-feedback1").show();
            $(".invalid-feedback2").show();
            $(".invalid-feedback3").show();
          }
         if (user!='' && pass=='')
          {  
            $(".invalid-feedback1").hide();
            $(".invalid-feedback2").show();
          }

         if (user=='' && pass!='')
          {  
            $(".invalid-feedback2").hide();
            $(".invalid-feedback1").show();
          }
          if (user!='' && pass!='')
          {
            $(".invalid-feedback1").hide();
            $(".invalid-feedback2").hide();
            $(".invalid-feedback3").show();
          }

          if (cradio=="admin" || cradio=="customer")
          {  
            console.log("if loop cradio", cradio);
            $(".invalid-feedback3").hide();
          }

          if (user!='' && pass=='' && cradio!="admin" && cradio!="customer")
          {  
            $(".invalid-feedback2").show();
            $(".invalid-feedback3").show();
          }

          if (user=='' && pass!='' && cradio!="admin" && cradio!="customer")
          {  
            $(".invalid-feedback1").show();
            $(".invalid-feedback3").show();
          }
          if (user!='' && pass!='' && cradio=="admin")
          {  
            $(".invalid-feedback4").show();
           
          }
          if (user!='' && pass!='' && cradio=="customer")
          {  
            $(".invalid-feedback4").show();
           
          }



    
        this.reg_service.checkLogin(this.customer).subscribe(obj=>{
          if(obj==null)
          {
            console.log("wrong pass / username");
            console.log("customer");
          
          }

          else{
            
            if(desig=="customer" && user!='' && pass!='' )
            {
              console.log(obj);
              this.customer1=obj;
              sessionStorage.setItem("customer",JSON.stringify(obj));
              this.router.navigate(["dashboard"]);
            }
          
            else 
          
             if(desig=="admin" && user!='' && pass!='' )
            {
                console.log(obj);
                this.customer1=obj;
                sessionStorage.setItem("customer",JSON.stringify(obj));
                this.router.navigate(["adminDashboard"]);
              }
              
          }
        })
      }

       
}

  

