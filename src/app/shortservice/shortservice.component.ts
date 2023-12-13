import { Component, Inject, Input, OnInit } from '@angular/core';
import { ItemslistService } from '../itemslist.service';

@Component({
  selector: 'app-shortservice',
  templateUrl: './shortservice.component.html',
  styleUrls: ['./shortservice.component.scss']
})
export class ShortserviceComponent {

  constructor() {}
  
  @Input() funcTitle?: string;
  @Input() maxValue?: string;
  @Input() minValue?: string;
}
