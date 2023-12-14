import { Component, inject } from '@angular/core';
import { ItemslistService } from '../../services/itemslist.service';
import { IGroup } from '../../interfaces/group-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
    groupList: IGroup[];
    private service = inject(ItemslistService)

    constructor() {
      this.groupList = this.service.groupList
    }
  
}
