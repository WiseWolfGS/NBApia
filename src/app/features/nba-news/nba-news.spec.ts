import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaNews } from './nba-news';

describe('NbaNews', () => {
  let component: NbaNews;
  let fixture: ComponentFixture<NbaNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
