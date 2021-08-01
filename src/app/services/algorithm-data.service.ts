import { Injectable } from '@angular/core';
import * as fs from 'fs';
import * as path from 'path';

const csvFilePath = '../../data/AlgoPractice.csv';
const Papa = require('papaparse');

@Injectable({
  providedIn: 'root'
})
export class AlgorithmDataService {

    data: any[] = [];

    constructor() { }

    getData(file: FileList): any[] {
        Papa.parse(file[0], {
            header: true,
            complete: (results: { data: string | any[]; }) => {
              console.log('Complete', results.data.length, 'records.');
            }
          });

        return this.data
    }
}
