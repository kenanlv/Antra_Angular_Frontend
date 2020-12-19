import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from 'src/app/shared/models/client';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(protected apiService:ApiService) { }
  getAllClients() : Observable<Client[]> {
    return this.apiService.getAll('Clients/ListAll');
  }
  createClient(resource: any) : Observable<Client> {
    return this.apiService.create('Clients/Add', resource);
  }
  deleteClient(resource: any) : Observable<Client> {
    return this.apiService.delete('Clients/Delte', resource);
  }
}
