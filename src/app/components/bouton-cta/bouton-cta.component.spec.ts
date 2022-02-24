import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonCtaComponent } from './bouton-cta.component';

describe('BoutonCtaComponent', () => {
  let component: BoutonCtaComponent;
  let fixture: ComponentFixture<BoutonCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
