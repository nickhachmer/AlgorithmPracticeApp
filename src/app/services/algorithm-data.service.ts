import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmDataService {
    constructor(private http: HttpClient) { }

    getData() {
      return this.http.get<any>('/api/algo', { responseType: 'json' });
    }

    writeData(data: any) {
      var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('/api/algo', data);
    }
}
