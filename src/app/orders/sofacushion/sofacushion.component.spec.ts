import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofacushionComponent } from './sofacushion.component';

describe('SofacushionComponent', () => {
  let component: SofacushionComponent;
  let fixture: ComponentFixture<SofacushionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SofacushionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SofacushionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
