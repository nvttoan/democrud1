import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router){
    
  }
  ngOnInit(): void{
  }
  onLogout() {
    // xử lý đăng xuất tại đây (ví dụ: xóa token, xóa thông tin user)
    this.router.navigate(['/']); // chuyển hướng đến trang chủ
  }
  saveEmployee(){
    this.employeeService.CreateEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.gotoEmployeeList();
    }),
    console.error();
    
  }
  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee()
  }
}
