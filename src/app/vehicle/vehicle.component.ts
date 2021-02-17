import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private api: LogService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  addUser(formObj){
   
    console.log(this.userProfileForm.value)
    
    this.api.createUser(formObj).subscribe((response)=>
    console.log("user added"))
    
    
  }
  userProfileForm = this.fb.group({
      username: [''],
      add: [''],
      phone:[''],
      veh:['']
    });
}
