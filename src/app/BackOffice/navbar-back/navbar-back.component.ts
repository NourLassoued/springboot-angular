import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css']
})
export class NavbarBackComponent {

  isLoggedIn =false;
  user = null;

  constructor(public login:LoginService){}

  ngOnInit():void{/*
    this.isLoggedIn=this.login.isLoggedIn();
    this.user = this.login.getUser();
  this.login.loginStatusSubject.asObservable().subscribe((data) => {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user = this.login.getUser();

  })*/
  }
  public logout(){
    this.login.logout();
    window.location.reload();
   //this.login.loginStatusSubject.next(false);
  }
}
