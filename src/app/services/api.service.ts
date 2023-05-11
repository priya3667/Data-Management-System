import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  
  postEmp(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/posts', data)
  }

  getemployee(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:3000/posts')
  }

  particularId(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/posts?empid='+id)
  }

  deleteemployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }

  editEmp(id:number){
    return this.http.get(`http://localhost:3000/posts/${id}`);
  }

  updateEmp(data:any){
    return this.http.put(`http://localhost:3000/posts/${data.id}`, data)
  }
}
