import { Employee } from './../../representations/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  employees: Employee[] = [];

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployee();
  }
}
