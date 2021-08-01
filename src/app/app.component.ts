import { Component } from '@angular/core';
import { AlgorithmDataService } from './services/algorithm-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    data: any[] = [];

    constructor(public algorithmDataService: AlgorithmDataService) { }

    ngOnInit(): void {
        
    }

    fileSelected(event: any) {
        const files = event.srcElement.files;

        this.data = this.algorithmDataService.getData(files);
    }

}
