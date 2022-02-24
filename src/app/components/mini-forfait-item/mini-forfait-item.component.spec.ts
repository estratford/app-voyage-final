import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniForfaitItemComponent } from './mini-forfait-item.component';

describe('MiniForfaitItemComponent', () => {
  let component: MiniForfaitItemComponent;
  let fixture: ComponentFixture<MiniForfaitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniForfaitItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniForfaitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
