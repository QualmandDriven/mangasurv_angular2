import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasFollowedComponent } from './mangas-followed.component';

describe('MangasFollowedComponent', () => {
  let component: MangasFollowedComponent;
  let fixture: ComponentFixture<MangasFollowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangasFollowedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangasFollowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
