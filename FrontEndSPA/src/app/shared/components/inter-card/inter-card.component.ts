import { Component, Input, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { Client } from '../../models/client';
import { Employee } from '../../models/employee';
import { Interaction } from '../../models/interaction';

@Component({
  selector: 'app-inter-card',
  templateUrl: './inter-card.component.html',
  styleUrls: ['./inter-card.component.css']
})
export class InterCardComponent implements OnInit {
  @Input() client: Client;
  @Input() emp:Employee;
  inters : Interaction[];
  constructor(private interService: InteractionService) { }

  ngOnInit(): void {
    if (this.client) {
      this.interService.getByCliId(this.client.id).subscribe((g) => {
        this.inters = g;
        console.log(this.inters);
      });
    } else {
      this.interService.getByEmpId(this.emp.id).subscribe((g) => {
        this.inters = g;
        console.log(this.inters);
      });
    }
    
  }

}
