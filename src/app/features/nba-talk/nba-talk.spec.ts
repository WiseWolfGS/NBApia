import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaTalk } from './nba-talk';

describe('NbaTalk', () => {
  let component: NbaTalk;
  let fixture: ComponentFixture<NbaTalk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaTalk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaTalk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
