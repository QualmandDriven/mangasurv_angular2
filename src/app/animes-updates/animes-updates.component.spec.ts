import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesUpdatesComponent } from './animes-updates.component';

describe('AnimesUpdatesComponent', () => {
  let component: AnimesUpdatesComponent;
  let fixture: ComponentFixture<AnimesUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimesUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
