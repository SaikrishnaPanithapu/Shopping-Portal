import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http:HttpClient) { }
  getApiData(){
    let url = "http://www.mocky.io/v2/5c8b92a4360000cd198f81b4";
    return this.http.get(url);

  }
  ngOnInit() {

  }
}
