import { ComponentFixture, TestBed } from '@angular/core/testing';

import { groupFunctionsComponent } from './groupFunctions.component';

describe('ShortserviceComponent', () => {
  let component: groupFunctionsComponent;
  let fixture: ComponentFixture<groupFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [groupFunctionsComponent]
    });
    fixture = TestBed.createComponent(groupFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
