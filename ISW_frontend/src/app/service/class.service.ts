import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(
    private readonly http: HttpClient
  ) {}

  private apiUrl = 'http://localhost:3000'

  getClasses(): Observable<any>{
    return this.http.get(this.apiUrl+'/class/')
  }
}
