import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortserviceComponent } from './shortservice.component';

describe('ShortserviceComponent', () => {
  let component: ShortserviceComponent;
  let fixture: ComponentFixture<ShortserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortserviceComponent]
    });
    fixture = TestBed.createComponent(ShortserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
