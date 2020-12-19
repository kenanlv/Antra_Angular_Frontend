import { Component, OnInit } from '@angular/core';
import { ClientService } from '../core/services/client.service';
import { EmployeeService } from '../core/services/employee.service';
import { Client } from '../shared/models/client';
import { Employee } from '../shared/models/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clients : Client[];
  emps : Employee[];
  constructor(private clientService : ClientService, private empService : EmployeeService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe((g) => {
      console.log("call");
      this.clients = g;
      console.log(this.clients);
    });
    this.empService.getAllEmployees().subscribe((g) => {
      console.log("call");
      this.emps = g;
      console.log(this.emps);
    });
  }

}
