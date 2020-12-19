import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(protected apiService:ApiService) { }
  getAllEmployees() : Observable<Employee[]> {
    return this.apiService.getAll('Employees/ListAll')
  }
  createEmp(resource: any) : Observable<Employee> {
    return this.apiService.create('Employees/Add', resource);
  }
  deleteEmp(resource: any) : Observable<Employee> {
    return this.apiService.delete('Employees/Delte', resource);
  }
}
