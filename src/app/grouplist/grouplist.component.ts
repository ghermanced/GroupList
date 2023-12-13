import { Component, inject } from '@angular/core';
import { ItemslistService } from '../itemslist.service';
import { IGroup } from '../group-list';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.scss']
})
export class GrouplistComponent {
  
    groupList: IGroup[];
    private service = inject(ItemslistService)

    constructor() {
      this.groupList = this.service.groupList
    }
  
}
