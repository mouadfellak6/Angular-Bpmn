import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://api.restful-api.dev/objects'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<{ id: string, name: string }[]>(this.apiUrl);
  }
}
