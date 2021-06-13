import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetlonComponent } from './netlon.component';

describe('NetlonComponent', () => {
  let component: NetlonComponent;
  let fixture: ComponentFixture<NetlonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetlonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
