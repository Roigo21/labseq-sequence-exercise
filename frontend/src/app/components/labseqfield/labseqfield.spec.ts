import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Labseqfield } from './labseqfield';

describe('Labseqfield', () => {
  let component: Labseqfield;
  let fixture: ComponentFixture<Labseqfield>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Labseqfield]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Labseqfield);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
