import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artigo } from '../model/artigo.model';

@Injectable({ providedIn: 'root' })
export class ArtigoService {

    apiUrl = 'http://localhost:8080/api/artigo/';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    constructor(
        private httpClient: HttpClient
    ) {}

    public getArtigos(): Observable<Artigo[]> {
       return this.httpClient.get<Artigo[]>(this.apiUrl);
        
    }

    public postArtigos(artigo: any): Observable<Artigo>{
      return this.httpClient.post<any>(this.apiUrl, artigo, this.httpOptions);
    }

    public updateArtigos(artigo: any): Observable<Artigo>{
      return this.httpClient.put<any>(this.apiUrl, artigo, this.httpOptions);
    }
    
    public deleteArtigos (id: number) {
      this.httpClient.delete(this.apiUrl+ id).subscribe(data => {
        console.log(data);
      });
    }
  }
