import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  /* ---------- Item details ---------- */
  itemDetails;

  constructor(private http: HttpClient) { }
  
  /* ---------- Data ---------- */
  getInfo() {
    return this.http.get(environment.urlTest);
  }
}
