import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
   
  constructor(private http:HttpClient,private routes : Router,private auth: AuthService) {
   }
  
   public Username: any;

  empRole(empid: string, password: string): Observable<boolean> {
    return this.http.get<{ email: string, password: string ,role:string}[]>('http://localhost:3000/posts').pipe(
      map(users => {
        const user = users.find(u => u.email === empid && u.password === password);
        if (user) {
          this.Username = user.role;
          this.auth.setLoggedIn(true);
          this.routes.navigate(['/all-emp']);
        } else {
          this.auth.setLoggedIn(false);
        }
        return this.auth.isLoggedIn();
      })
    );  
  }

  logout() {
    localStorage.clear();
    this.auth.setLoggedIn(false);
  }

}
