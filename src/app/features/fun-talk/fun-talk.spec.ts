import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunTalk } from './fun-talk';

describe('FunTalk', () => {
  let component: FunTalk;
  let fixture: ComponentFixture<FunTalk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunTalk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunTalk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
