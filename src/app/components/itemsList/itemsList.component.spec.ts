import { ComponentFixture, TestBed } from '@angular/core/testing';

import { itemsListComponent } from './itemsList.component';

describe('ItemslistComponent', () => {
  let component: itemsListComponent;
  let fixture: ComponentFixture<itemsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [itemsListComponent]
    });
    fixture = TestBed.createComponent(itemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
