import { Component, inject } from '@angular/core';
import { ItemslistService } from '../../services/itemslist.service';
import { IGroup } from '../../interfaces/group-list';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  groupList: IGroup[];
  private service = inject(ItemslistService)

  constructor(private router: Router, private group: GroupService) {
    this.groupList = this.service.groupList
  }

  createGroup() {
    this.group.deleteCurrentGroup()
    this.router.navigate(
      ['modifica'],
      {queryParams: {state: 'create'}}
      )
  }
}
