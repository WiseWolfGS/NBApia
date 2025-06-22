import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NBANewsComponent } from './nbanews.component';

describe('Home', () => {
  let component: NBANewsComponent;
  let fixture: ComponentFixture<NBANewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NBANewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NBANewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
