import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserverService {
  private REST_API_SERVER = "  http://localhost:3000";
  private httpOptions = {
    header : new HttpHeaders({
      'Content-Type ': 'application/json'
      // Authorization : 'my - auth -token '
    })
  }

  constructor(private httpclient : HttpClient) { }
  public getComments(): Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpclient.get<any>(url)
  }
}
