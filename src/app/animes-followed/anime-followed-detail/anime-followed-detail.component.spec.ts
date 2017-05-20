import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeFollowedDetailComponent } from './anime-followed-detail.component';

describe('animeFollowedDetailComponent', () => {
  let component: AnimeFollowedDetailComponent;
  let fixture: ComponentFixture<AnimeFollowedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeFollowedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeFollowedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
