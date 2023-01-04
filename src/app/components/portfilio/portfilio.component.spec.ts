import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfilioComponent } from './portfilio.component';

describe('PortfilioComponent', () => {
  let component: PortfilioComponent;
  let fixture: ComponentFixture<PortfilioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
