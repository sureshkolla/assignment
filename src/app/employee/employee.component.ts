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
   private DateTitle:any;
   public colors:any;
   public myColor1:any;
   color:any;
    constructor( private router: Router,public employeeservice: EmployeeService) { 
        this.employeeservice.getPosts().subscribe(colors=>{
            this.colors = colors.color;            
        })
        this.startTime();
  }
  
  ngOnInit() {
   setInterval (() => {
      this.startTime(); 
      console.log("Hello from setTimeout");
    }, 500)
  }
  
  private startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds(); 
      this.DateTitle =    h + ":" + m + ":" + s; 
  }
  pasvalues(event: any) { 
        this.myColor1 =  this.color.value
    }  
}
