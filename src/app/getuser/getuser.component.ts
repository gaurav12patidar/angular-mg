import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {
  data;
  status;
  message;
  constructor(private api: LogService) { 
  this.api.getUsers().subscribe(data=>{  
    this.data=data;
    this.status=this.data.data;
    this.message=this.data.message;
    console.log(data);
    
  })
  }
  ngOnInit(): void {
  }

}
