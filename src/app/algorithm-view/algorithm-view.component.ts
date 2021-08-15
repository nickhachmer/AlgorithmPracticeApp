import { Component, OnInit } from '@angular/core';
import { AlgorithmDataService } from '../services/algorithm-data.service';
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
    this.algorithmDataService.getData().subscribe(result => {
      this.data = result;
    })
  }
  
  editClick() {
    this.editing = true;
  }

  saveClick() {
    this.algorithmDataService.writeData(this.data).subscribe(result => {
      console.log(result);
    });
    this.editing = false;
  }

  cancelClick() {
    this.editing = false;
  }

  addRow() {
    this.data.unshift({
      number: 0,
      difficulty: '',
      name: '',
      link: '',
      geeksforGeeks: '',
      tags: '',
      algorithms: '',
      description: '',
    })
  }

}
