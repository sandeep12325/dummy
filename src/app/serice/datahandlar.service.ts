import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserPayload } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DatahandlarService {
  private apiUrl = 'https://api.example.com/users';
  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get('http://localhost:3000/api/all')
  }
  userAdd(val: any) {
    return this.http.post('http://localhost:3000/api/add', val)
  }
  updataUser(id: any, val: any) {
    return this.http.put(`http://localhost:3000/api/${id}`, val)
  }
  deleteuser(val: any) {
    return this.http.delete(`http://localhost:3000/api/${val}`)
  }

  getalldata(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  createUser(payload: UserPayload): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }


  uploadfieApi(formData: FormData): Observable<any> {
    console.log(formData);

    return this.http.post('http://localhost:3000/api/upload', formData);
  }


  cutome(payload: UserPayload): Observable<any> {
    console.log('Payload received:', payload);

    // ✅ Return custom fake response
    const fakeResponse = {
      success: true,
      message: 'User created successfully!',
      data: payload, // optional, return the payload as data
    };

    return of(fakeResponse);
  }
  createUsermat(payload: any) :any{
    console.log('Payload received:', payload);

    // ✅ Return custom fake response
   return  {
      success: true,
      message: 'User created successfully!',
      data: payload, // optional, return the payload as data
    };
  }
}
