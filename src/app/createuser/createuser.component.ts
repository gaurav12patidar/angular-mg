import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private api: LogService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

addUser(formObj){
   
    console.log(this.userProfileForm.value)
    
    this.api.postVehicle(formObj).subscribe((response)=>
    console.log("user added"))
    
    
  }
  userProfileForm = this.fb.group({
      username: [''],
      todo: [''],
      veh:['']
    });
}

