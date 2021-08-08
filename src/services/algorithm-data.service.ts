import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as fs from 'fs';
import * as path from 'path';

const csvFilePath = 'assets/AlgoPractice.csv';
const Papa = require('papaparse');

@Injectable({
  providedIn: 'root'
})
export class AlgorithmDataService {

    data: any[] = [];

    constructor(private http: HttpClient) { }

    getData() {
      return this.http.get(csvFilePath, {responseType: 'text'});
    }
}
