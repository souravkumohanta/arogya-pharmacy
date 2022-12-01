import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

loginRedirect(){
this.route.navigate(["login"]);
}

RegisterRedirect(){
this.route.navigate(["register"]);

}

}
