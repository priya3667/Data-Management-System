import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-emp',
  templateUrl: './all-emp.component.html',
  styleUrls: ['./all-emp.component.css']
})
export class AllEmpComponent implements OnInit{
  displayedColumns: string[] = ['empid', 'fname', 'lname', 'email','record','date','img','family','action'];
  dataSource!: MatTableDataSource<any []>;
  localStorage: Storage = window.localStorage;
  family:any[]=[]
  
  constructor(
    private api:ApiService,
    private router: Router,
     private login:LoginService){
  }
  @ViewChild(MatSort)
  sort!: MatSort;
  public currentUser: any;
  role!: string |null;

    ngOnInit(): void {
    this.currentUser = this.login.Username?.role;
    this.api.getemployee().subscribe (response => {
      console.log('Employee details',response);
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
    });
    this.role = localStorage.getItem('role');
  }

  deleteemployee(id:number){
    if(localStorage.getItem('role')=== 'Admin'){
      this.api.deleteemployee(id).subscribe({
        next: () => {
          alert("Employee deleted Successfully !")
          this.api.getemployee().subscribe (response => {
            this.dataSource = new MatTableDataSource(response);
          });
        },
        error: console.log,
      })
    }
    else{
      alert('You cannot delete !!')
    }
  }
  logout(){
    localStorage.clear();
    this.login.logout();
    alert('Are you sure you want to logout ?')
    this.router.navigate(['login']);
  }
}