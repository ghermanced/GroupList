import { Injectable } from '@angular/core';
import { IGroup } from '../interfaces/group-list';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private currentGroup?: any;

  constructor() { }

  setCurrentGroup(group: IGroup) {
    this.currentGroup = group;
  }

  getCurrentGroup() {
    return this.currentGroup;
  }

  deleteCurrentGroup() {
    this.currentGroup = null;
  }
}
