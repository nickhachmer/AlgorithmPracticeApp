import { Component, OnInit } from '@angular/core';
import { AlgorithmDataService } from '../../services/algorithm-data.service';
import * as fs from 'fs';
import * as path from 'path';
const Papa = require('papaparse');

@Component({
  selector: 'app-algorithm-view',
  templateUrl: './algorithm-view.component.html',
  styleUrls: ['./algorithm-view.component.sass']
})
export class AlgorithmViewComponent implements OnInit {

  data: any[] = [];

  constructor(public algorithmDataService: AlgorithmDataService) { }

  ngOnInit(): void {
    this.algorithmDataService.getData().subscribe(file => {
      Papa.parse(file, {
        header: true,
        complete: (results: { data: any[]; }) => {
          this.data = results.data;
          console.log('Complete', results.data.length, 'records.');
        }
      });
    })
  }
}
