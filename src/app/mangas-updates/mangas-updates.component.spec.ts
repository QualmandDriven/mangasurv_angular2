import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasUpdatesComponent } from './mangas-updates.component';

describe('MangasUpdatesComponent', () => {
  let component: MangasUpdatesComponent;
  let fixture: ComponentFixture<MangasUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangasUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangasUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
