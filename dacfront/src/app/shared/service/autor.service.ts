import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autor } from 'dacfront/src/app/shared/model/autor.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AutorService {

    apiUrl = 'http://localhost:8080/api/autor/';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    constructor(
        private httpClient: HttpClient
    ) {}

    public getAutores(): Observable<Autor[]> {
       return this.httpClient.get<Autor[]>(this.apiUrl);
        
    }

    public postAutores(autor: any): Observable<Autor>{
      return this.httpClient.post<any>(this.apiUrl, autor, this.httpOptions);
    }
    
    public updateAutores(autor: any): Observable<Autor>{
      return this.httpClient.put<any>(this.apiUrl, autor, this.httpOptions);
    }

    public deleteAutores (id: number) {
      this.httpClient.delete(this.apiUrl+ id).subscribe(data => {
        console.log(data);
      });
    }


  }
