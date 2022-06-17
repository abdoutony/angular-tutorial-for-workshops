import { Injectable } from '@angular/core';
import { Employee } from '../../representations/employee';
import { employeeData } from '../../data';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  employees: Employee[] = [];
  employee: Employee = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    company_name: '',
  };
  getEmployee() {
    this.employees = employeeData;
    return this.employees;
  }

  addNewEmployee(employee: Employee) {
    this.employees.push({ ...employee });
    employee.id = 0;
    employee.first_name = '';
    employee.last_name = '';
    employee.email = '';
    employee.gender = '';
    employee.company_name = '';
  }
  deleteEmployee(id: number) {
    console.log(typeof id);
    this.employees.forEach((value, index) => {
      if (value.id == id) this.employees.splice(index, 1);
    });
  }

  fillFormEdit(id: number) {
    const emp = this.employees.find((emp) => emp.id === id);
    if (emp) {
      this.employee.id = emp.id;
      this.employee.first_name = emp.first_name;
      this.employee.last_name = emp.last_name;
      this.employee.email = emp.email;
      this.employee.gender = emp.gender;
      this.employee.company_name = emp.company_name;
    }
  }
}
