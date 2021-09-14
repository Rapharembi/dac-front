import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';
import { Volume } from '../model/volume.model';

@Injectable({ providedIn: 'root' })
export class VolumeService {

    apiUrl = 'http://localhost:8080/api/volume/';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    constructor(
        private httpClient: HttpClient
    ) {}

    public getVolumes(): Observable<Volume[]> {
       return this.httpClient.get<Volume[]>(this.apiUrl);
        
    }

    public postVolumes(volume: any): Observable<Volume>{
      return this.httpClient.post<any>(this.apiUrl, volume, this.httpOptions);
    }

    public updateVolumes(volume: any): Observable<Volume>{
      return this.httpClient.put<any>(this.apiUrl, volume, this.httpOptions);
    }

    public deleteVolumes (id: number) {
      this.httpClient.delete(this.apiUrl+ id).subscribe(data => {
        console.log(data);
      });
    }
  }
