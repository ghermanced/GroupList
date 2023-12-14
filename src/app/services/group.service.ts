import { Injectable } from '@angular/core';
import { IGroup } from '../interfaces/group-list';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private currentGroup?: IGroup;

  constructor() { }

  setCurrentGroup(group: IGroup) {
    this.currentGroup = group;
    console.log(group)
  }

  getCurrentGroup() {
    return this.currentGroup;
  }
}
