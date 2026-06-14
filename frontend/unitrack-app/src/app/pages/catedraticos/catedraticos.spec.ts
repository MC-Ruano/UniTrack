import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catedraticos } from './catedraticos';

describe('Catedraticos', () => {
  let component: Catedraticos;
  let fixture: ComponentFixture<Catedraticos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catedraticos],
    }).compileComponents();

    fixture = TestBed.createComponent(Catedraticos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
