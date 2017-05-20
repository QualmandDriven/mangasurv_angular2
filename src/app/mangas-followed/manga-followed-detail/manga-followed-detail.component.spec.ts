import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaFollowedDetailComponent } from './manga-followed-detail.component';

describe('MangaFollowedDetailComponent', () => {
  let component: MangaFollowedDetailComponent;
  let fixture: ComponentFixture<MangaFollowedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaFollowedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaFollowedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
