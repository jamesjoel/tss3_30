import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelteacherComponent } from './delteacher.component';

describe('DelteacherComponent', () => {
  let component: DelteacherComponent;
  let fixture: ComponentFixture<DelteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
