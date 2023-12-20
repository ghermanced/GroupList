import { Component, Input } from '@angular/core';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.scss']
})
export class ModificaComponent {

  groupName?: string;
  maxValue?: string;
  minValue?: string;

  constructor(private groupService: GroupService) {
    this.groupName = groupService.getCurrentGroup()?.groupName
    this.maxValue = groupService.getCurrentGroup()?.maxValue
    this.minValue = groupService.getCurrentGroup()?.minValue
  }
}
