import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../core/services/client.service';
import { Client } from '../shared/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  client: Client = {
    email: '',
    id: 0,
    name: '',
    phones: '',
    address: '',
    clicked: false
  }
  buttonType: string;
  returnUrl: string;
  constructor(private clientService: ClientService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.returnUrl = params.returnUrl || '/')
    );
  }
  submit(buttonType) {
    console.log(this.client);
    console.log(buttonType)
    if (buttonType === 'Create') {
      this.clientService.createClient(this.client).subscribe(
        (response) => {
          if (response) {
            this.router.navigate([this.returnUrl]);
          }
        }, 
        (err: any) => {
          console.log(err);
        }
      );
    } else if (buttonType === 'Update') {
      this.clientService.updateClient(this.client).subscribe(
        (response) => {
          if (response) {
            this.router.navigate([this.returnUrl]);
          }
        }, 
        (err: any) => {
          console.log(err);
        }
      )
    } else {
      this.clientService.deleteClient(this.client.id).subscribe(
        (response) => {
            this.router.navigate([this.returnUrl]);
        }, 
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
}
