import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as _moment from 'moment';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
 
})
export class AddEmpComponent implements OnInit {
  // @ViewChild('myFileInput')
  // myFileInput!: ElementRef;
  addEmpForm!: FormGroup; 
  public ids: number[] = [];
  data: string[] = [];
  submitted = false;
  src:any;
  empid!:number;
  record='';
  @Input() img:any;

  constructor(private fb: FormBuilder, private api:ApiService,private router:Router,private datePipe:DatePipe){}
 
  onFileSelected(event: any) {
   if(event.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event)=>{
      this.src= event.target?.result;
      this.addEmpForm.get('img')?.setValue([this.src]);
    }
   }
  }

  newMember() {  
    return this.fb.group({  
      name: '',  
      occupation: '',  
      age: ''
    });
  }  
 
  family() : FormArray {  
    return this.addEmpForm.get("family") as FormArray  
  }  
  addFamily() {  
    this.family().push(this.newMember());  
  }
  
  addEmployee() {  
    this.submitted = true;
    this.data.push(this.addEmpForm.value);   
    this.api.postEmp(this.addEmpForm.value).subscribe({
      next: (res) => {
        alert("Employee added successfully !!");
        console.log("Employee added successfully: ", res);
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.log("Error while adding Employee: ", err);
        alert("Error while adding Employee !!");
      }
    });
  }  

  ngOnInit(): void {
    this.empid=Math.floor(Math.random() * 90000) + 10000;

    this.addEmpForm = this.fb.group({  
      fname: new FormControl('', Validators.required) , 
      lname:new FormControl('', Validators.required) ,
      empid:new FormControl(this.empid),
      password:new FormControl('', Validators.required) ,
      email:new FormControl('', Validators.required),
      phone:new FormControl('', Validators.required) ,
      family: this.fb.array([]) ,
      role:new FormControl('', Validators.required) ,
      record:new FormControl(this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')),
      date:new FormControl('', Validators.required) ,
      img: new FormControl(null)
    });  
  }
}