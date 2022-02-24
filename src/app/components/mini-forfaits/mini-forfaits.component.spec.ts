import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniForfaitsComponent } from './mini-forfaits.component';

describe('MiniForfaitsComponent', () => {
  let component: MiniForfaitsComponent;
  let fixture: ComponentFixture<MiniForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniForfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
