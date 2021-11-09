import { Injectable } from '@angular/core';
import { Bug } from '../bug';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  public slides = [
  { src: "https://mobile-img.lpcdn.ca/lpca/924x/r3996/442dba2ec46933fd8a3f10cbe5575e53.jpeg" },
  { src: "https://lh3.googleusercontent.com/proxy/a9gpvPwJhIQG4RFiqY1rUuyBTAWdVA1RQOueN7RocdlZkcAWEMsyDLwyt3LtAiggdd0x-z8arRQXERK_9U3KVo2BIF_0wpVTf_W4mtflOfXG6V-Tbseb83O5cuI" },
  { src: "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?s=170667a" },
  { src: "https://cursus.edu/storage/thumbnails/INkezMyT0LWTsAUYgH8258YXUIMwsmSoldVFA4I9.jpeg" }
  ];

  bugs: Partial<Bug>[] = [];

  private apiServer = 'https://crudcrud.com/api/67f2afb3c2c04e369aa6a8f4bf7c85df';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getBugs() {
    return this.bugs;
  }

  
  create(bug: Partial<Bug>): Observable<Bug> {
    this.bugs.push(bug);
    console.log(this.bugs);
    return this.httpClient.post<Bug>(this.apiServer + '/bugs/', JSON.stringify(bug), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getById(id): Observable<Bug> {
    return this.httpClient.get<Bug>(this.apiServer + '/bugs/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Bug[]> {
    return this.httpClient.get<Bug[]>(this.apiServer + '/bugs/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, bug): Observable<Bug> {
    return this.httpClient.put<Bug>(this.apiServer + '/bugs/' + id, JSON.stringify(bug), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Bug>(this.apiServer + '/bugs/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  

  clear() {
    this.bugs = [];
  }

  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}
