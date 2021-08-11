import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  data;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.data = this.appService.itemDetails;
    
    if(this.data == undefined){
      this.router.navigate(['/']);
    }
  }

}
