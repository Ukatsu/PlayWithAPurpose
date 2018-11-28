import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtraitFrameComponent } from './protrait-frame.component';

describe('ProtraitFrameComponent', () => {
  let component: ProtraitFrameComponent;
  let fixture: ComponentFixture<ProtraitFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtraitFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtraitFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
