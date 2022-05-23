import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrenavComponent } from './barrenav.component';

describe('BarrenavComponent', () => {
  let component: BarrenavComponent;
  let fixture: ComponentFixture<BarrenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
