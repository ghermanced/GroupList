import { Component, Input, inject, Renderer2, ElementRef} from '@angular/core';
import { ItemslistService } from '../../services/itemslist.service';
import { IFunctions, IGroup } from '../../interfaces/group-list';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-itemsList',
  templateUrl: './itemsList.component.html',
  styleUrls: ['./itemsList.component.scss']
})
export class ItemsListComponent {
  groupList: IGroup[];

  isDropdownVisible = false;

  @Input() functionsList!: IFunctions[];
  @Input() serviceName?: string;
  @Input() warningMessage?: string;
  @Input() groupIndex!: number;

  private service = inject(ItemslistService);

  private documentClickListener!: () => void;

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef, 
    private router: Router,
    private groupService: GroupService,
    ) {
    this.groupList = this.service.groupList;
  }


  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;

    if (this.isDropdownVisible) {
      this.documentClickListener = this.renderer.listen('document', 'click', this.onDocumentClick);
    } else {
      this.documentClickListener();
    }
  }

  onDocumentClick = (event: Event) => {
    const isOutsideDropdown = !(this.el.nativeElement.contains(event.target));

    if (isOutsideDropdown) {
      this.isDropdownVisible = false;
    }
  };

  modificaGroup() {
    this.router.navigate(['modifica']);
    this.groupService.setCurrentGroup(this.groupList[this.groupIndex])
  }
}
