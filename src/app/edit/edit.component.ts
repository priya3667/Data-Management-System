import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { ApiService } from '../services/api.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Student: any;
  constructor(private api:ApiService,private router:Router, private route:ActivatedRoute ){
  }
  
  ngOnInit(): void {
   this.route.paramMap.subscribe((param)=>{
    let id = (param.get('id'));
    this.editEmployee(id); 
   })
   
  }
  editEmployee(id:any){
    this.api.editEmp(id).subscribe((data)=>{
    this.Student = data
    })
   }

   updateEmployee(){
    this.api.updateEmp(this.Student).subscribe({
      next:()=>{
        alert("Updated Succesfully !!")
        this.router.navigate(['all-emp']);
      },
      error:(error)=>{
        console.log(error)
      }
    })
   }
}