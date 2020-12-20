import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../core/services/client.service';
import { EmployeeService } from '../core/services/employee.service';
import { Employee } from '../shared/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  errMsg: string;
  errFlg: boolean = false;
  emp: Employee = {
    id: 0,
    name: '',
    password: '',
    designation: '',
    clicked: false
  }
  buttonType: string;
  returnUrl: string;
  constructor(private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.returnUrl = params.returnUrl || '/')
    );
  }
  submit(buttonType) {
    console.log(this.emp);
    console.log(buttonType)
    if (buttonType === 'Create') {
      this.empService.createEmp(this.emp).subscribe(
        (response) => {
          if (response) {
            this.errFlg = false;
            this.router.navigate([this.returnUrl]);
          }
        },
        (err: any) => {
          this.errMsg = err;
          this.errFlg = true;
          console.log(err);
        }
      );
    } else if (buttonType === 'Update') {
      this.empService.updateEmp(this.emp).subscribe(
        (response) => {
          if (response) {
            this.errFlg = false;
            this.router.navigate([this.returnUrl]);
          }
        },
        (err: any) => {
          this.errMsg = err;
          this.errFlg = true;
          console.log(err);
        }
      )
    } else {
      this.empService.deleteEmp(this.emp.id).subscribe(
        (response) => {
          this.errFlg = false;
          this.router.navigate([this.returnUrl]);
        },
        (err: any) => {
          this.errMsg = err;
          this.errFlg = true;
          console.log(err);
        }
      );
    }
  }
}
