import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {

  @Input() funcName?: string;
  @Input() wasIncluded?: boolean;
  @Input() minValue?: string;
  @Input() maxValue?: string;

  constructor () {

  }
}
