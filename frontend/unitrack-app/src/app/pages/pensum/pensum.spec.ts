import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pensum } from './pensum';

describe('Pensum', () => {
  let component: Pensum;
  let fixture: ComponentFixture<Pensum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pensum],
    }).compileComponents();

    fixture = TestBed.createComponent(Pensum);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
