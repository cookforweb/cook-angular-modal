import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularmodalComponent } from './angularmodal.component';

describe('AngularmodalComponent', () => {
  let component: AngularmodalComponent;
  let fixture: ComponentFixture<AngularmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
