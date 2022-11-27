import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalExpensesComponent } from './total-expenses.component';

describe('TotalExpensesComponent', () => {
  let component: TotalExpensesComponent;
  let fixture: ComponentFixture<TotalExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
