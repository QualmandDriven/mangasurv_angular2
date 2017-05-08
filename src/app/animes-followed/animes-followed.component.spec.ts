import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesFollowedComponent } from './animes-followed.component';

describe('AnimesFollowedComponent', () => {
  let component: AnimesFollowedComponent;
  let fixture: ComponentFixture<AnimesFollowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimesFollowedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesFollowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
