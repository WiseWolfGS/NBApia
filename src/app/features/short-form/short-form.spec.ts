import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortForm } from './short-form';

describe('ShortForm', () => {
  let component: ShortForm;
  let fixture: ComponentFixture<ShortForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
