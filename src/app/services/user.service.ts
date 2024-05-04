// user.service.ts



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId: number = 1;

  constructor(private http:HttpClient) { }

   

  setUserId(userId: number): void {
    this.userId = userId;
  }

  getUserId(): number | undefined {
    return this.userId;
  }
    //add user
    public addUser(user:any){
      return this.http.post(`${baseUrl}/user/`,user);
  
    }
}


  //constructor(private http:HttpClient) { }




