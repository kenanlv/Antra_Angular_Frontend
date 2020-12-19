import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionService } from '../core/services/interaction.service';
import { Interaction } from '../shared/models/interaction';

@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.css']
})
export class InteractionsComponent implements OnInit {
  pipe = new DatePipe('en-US');
  now = Date.now();
  d = new Date(this.now).toISOString();
  myFormattedDate = this.pipe.transform(this.now,"medium");
  
  inter: Interaction = {
    id:0,
    clientId:0,
    empId:0,
    intType:'x',
    intDate:this.d,
    remarks:''
  }
  buttonType: string;
  returnUrl: string;
  constructor(private interService: InteractionService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.returnUrl = params.returnUrl || '/')
    );
    console.log(this.now);
    console.log(this.d);

    console.log(this.myFormattedDate);

  }
  submit(buttonType) {
    console.log(this.inter);
    console.log(buttonType)
    if (buttonType === 'Create') {
      this.interService.createInteraction(this.inter).subscribe(
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
      this.interService.updateInteraction(this.inter).subscribe(
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
      this.interService.deleteInteraction(this.inter.id).subscribe(
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
