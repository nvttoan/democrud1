import { EmployeeService } from './../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from './../employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  id!: number;
  employee!: Employee;
 constructor(private route : ActivatedRoute, private employeeService: EmployeeService){

  }
 ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee =data;
    })
  }
}
