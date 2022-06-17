import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css'],
})
export class EmployeeItemComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  @Input() id: string = '';
  @Input() first_name: string = '';
  @Input() last_name: string = '';
  @Input() email: string = '';
  @Input() gender: string = '';
  @Input() company_name: string = '';

  sendEmpToDelete(id: string) {
    console.log(id);
    this.employeeService.deleteEmployee(parseInt(id));
  }
  sendEmpToUpdate(id: string) {
    this.employeeService.fillFormEdit(parseInt(id));
  }
  ngOnInit(): void {}
}
