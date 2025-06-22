import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaMagazine } from './nba-magazine';

describe('NbaMagazine', () => {
  let component: NbaMagazine;
  let fixture: ComponentFixture<NbaMagazine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaMagazine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaMagazine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
