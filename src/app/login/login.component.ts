import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent {
  user : any;
  loginform!: FormGroup; 
  constructor(private fb: FormBuilder, private loginservice:LoginService,private routes : Router,
    private authService: AuthService){
   localStorage.setItem('username',this.user);
    this.loginform = this.fb.group({  
     
      empid :new FormControl('', Validators.required) ,
      password:new FormControl('', Validators.required) 

    }); 
  }

login() {
  const user = { email: this.loginform.value.empid, password: this.loginform.value.password, role:this.loginform.value.role };
  this.user=this.loginform.value.empid;
  const { empid, password } = this.loginform.value;
  this.loginservice.empRole(empid, password).subscribe(
    isLoggedIn => {
      if (isLoggedIn) {
        localStorage.setItem('role',this.loginservice.Username)
        this.routes.navigate(['/all-emp']);
        alert("Login Successful !");
      } else {
        alert('User not Found or wrong password!');
      }
    },
    error => {
      console.log(error);
    }
  );
}
}