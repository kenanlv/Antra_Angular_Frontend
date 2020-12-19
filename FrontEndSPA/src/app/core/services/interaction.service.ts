import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { Interaction } from 'src/app/shared/models/interaction';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor(protected apiService: ApiService) { }
  getAllInteractions(): Observable<Interaction[]> {
    return this.apiService.getAll('Interactions/ListAll');
  }
  getByCliId(id:number): Observable<Interaction[]> {
    return this.apiService.getOne('Interactions/GetByCliId', id);
  }
  getByEmpId(id:number): Observable<Interaction[]> {
    return this.apiService.getOne('Interactions/GetByEmpId', id);
  }
  createInteraction(resource: any): Observable<Interaction> {
    return this.apiService.create('Interactions/Add', resource);
  }
  updateInteraction(resource: any): Observable<Interaction> {
    return this.apiService.update('Interactions/Update', resource);
  }
  deleteInteraction(resource: any): Observable<Interaction> {
    return this.apiService.delete('Interactions/Delete/' + resource);
  }
}
