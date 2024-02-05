import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSectionComponent } from './bill-section.component';

describe('BillSectionComponent', () => {
  let component: BillSectionComponent;
  let fixture: ComponentFixture<BillSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
