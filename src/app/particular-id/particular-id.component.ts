import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-particular-id',
  templateUrl: './particular-id.component.html',
  styleUrls: ['./particular-id.component.css']
})
export class ParticularIdComponent {

  constructor(private route: ActivatedRoute, private api:ApiService) {}
  
  @Input() family!: any[];
  Student: any;
  empid:any;
  empdetailbyid:any

  dummyPic() {
    this.empdetailbyid.img = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg";
  }

  particularEmp(){
    this.api.particularId(this.empid).subscribe(response=>{
      this.Student= response;
      const studentObject = this.Student.reduce((obj:any, item:any) => {
        obj = item;
        return obj;
      }, {});
      this.empdetailbyid= studentObject
    })
  }

  ngOnInit(): void {
    this.empid= this.route.snapshot.params['id'];
   this.particularEmp();
  }
}
