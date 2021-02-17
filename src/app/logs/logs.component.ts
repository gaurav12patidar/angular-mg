import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
data;
status;
message;
  constructor( private api: LogService) { 
    this.api.getData().subscribe(data=>{  
      this.data=data;
      this.status=this.data.data;
      this.message=this.data.message;
      console.log(data);
      
    })
  }

  ngOnInit(): void {
  }
  
}
