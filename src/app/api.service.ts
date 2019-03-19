import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiURL = 'https://jsonplaceholder.typicode.com/users/1';
  constructor(private httpClient: HttpClient) { }

}
