import { Component, OnInit } from '@angular/core';
import { AlgorithmDataService } from '../../services/algorithm-data.service';
import * as fs from 'fs';
import * as path from 'path';
import { SortEvent } from 'primeng/api';
const Papa = require('papaparse');

@Component({
  selector: 'app-algorithm-view',
  templateUrl: './algorithm-view.component.html',
  styleUrls: ['./algorithm-view.component.sass']
})
export class AlgorithmViewComponent implements OnInit {

  editing: boolean = false;
  data: any[] = [];

  constructor(public algorithmDataService: AlgorithmDataService) { }

  ngOnInit(): void {
    this.algorithmDataService.getData().subscribe(file => {
      Papa.parse(file, {
        header: true,
        complete: (results: { data: any[]; }) => {
          this.data = results.data
            .filter(x => x && x.Number != '')
            .map(x => {
              return {
                number: parseInt(x.Number),
                difficulty: x.Difficulty,
                name: x.Name,
                link: x.Link,
                geeksforGeeks: x.Geeksforgeeks,
                tags: x.Tags,
                algorithms: x.Algorithms,
                description: x.Description,
              }
            });
          console.log('Complete', results.data.length, 'records.');
        }
      });
    })
  }
  
  editClick() {
    this.editing = true;
  }

  saveClick() {
    this.editing = false;
  }

  cancelClick() {
    this.editing = false;
  }

}
