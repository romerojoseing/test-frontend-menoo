import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* ---------- Filter ---------- */
  searchValue = '';
  items;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appService.getInfo().subscribe(result => {
      console.log(result)
      this.items = result;
    })
  }

  sendItem(item){
    this.appService.itemDetails = item;
    this.router.navigate(['/details']);
  }
}
