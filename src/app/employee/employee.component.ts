import { Component, Input, OnInit  } from '@angular/core'; 
import { EmployeeService } from './employee.service';
import { FormsModule,}   from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'page-employee',
  templateUrl: './employee.html',
    styleUrls: ['./employee.component.css'],
    providers: [EmployeeService]
})
export class EmployeePage {
private DateTitle:string;
   public colors:any;
   public myColor1:any;
   color:any;
    constructor( private router: Router,public employeeservice: EmployeeService) { 
        this.employeeservice.getPosts().subscribe(colors=>{
            this.colors = colors.color;            
        })
        this.startTime();
  }
   private checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }
   private startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = this.checkTime(m);
      s =  this.checkTime(s);
      this.DateTitle =    h + ":" + m + ":" + s;
      setTimeout(this.startTime, 500);
  }
  pasvalues(event: any) {
     console.log(event.color.value);
        this.myColor1 =  this.color.value
    } 
 
}
