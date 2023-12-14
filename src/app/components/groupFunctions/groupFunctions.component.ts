import { Component, Inject, Input, OnInit} from '@angular/core';
import { ItemslistService } from '../../services/itemslist.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-groupFunctions',
  templateUrl: './groupFunctions.component.html',
  styleUrls: ['./groupFunctions.component.scss']
})
export class groupFunctionsComponent {

  @Input() funcTitle?: string;
  @Input() maxValue?: string;
  @Input() minValue?: string;
  
  constructor() {}

  areNumbers() {
    return this.maxValue !== "null" && this.minValue !== "null";
  }
}
