import { EmployeeService } from '../../services/employee/employee.service';
import { Employee } from './../../representations/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  newEmployee: Employee = {
    id: this.employeeService.employee.id,
    first_name: this.employeeService.employee.first_name,
    last_name: this.employeeService.employee.last_name,
    email: this.employeeService.employee.email,
    gender: this.employeeService.employee.gender,
    company_name: this.employeeService.employee.company_name,
  };

  sendEmployeeData() {
    this.newEmployee.id = new Date().getTime();
    this.employeeService.addNewEmployee(this.newEmployee);
  }
  ngOnInit(): void {
    this.newEmployee.first_name = this.employeeService.employee.first_name;
  }
}
