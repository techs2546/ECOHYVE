import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedpillowComponent } from './bedpillow.component';

describe('BedpillowComponent', () => {
  let component: BedpillowComponent;
  let fixture: ComponentFixture<BedpillowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedpillowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedpillowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
