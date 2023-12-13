import { Component, Input, inject, Renderer2, ElementRef } from '@angular/core';
import { ItemslistService } from '../itemslist.service';
import { IFunctions, IGroup } from '../group-list';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.scss']
})
export class ItemslistComponent {
  groupList: IGroup[];

  isDropdownVisible = false;

  @Input() functionsList!: IFunctions[];
  @Input() serviceName?: string;
  @Input() warningMessage?: string;

  private service = inject(ItemslistService);

  private documentClickListener!: () => void;

  constructor(private renderer: Renderer2, private el: ElementRef) {
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
}
