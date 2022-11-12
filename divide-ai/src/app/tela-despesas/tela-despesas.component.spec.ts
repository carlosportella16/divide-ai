import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDespesasComponent } from './tela-despesas.component';

describe('TelaDespesasComponent', () => {
  let component: TelaDespesasComponent;
  let fixture: ComponentFixture<TelaDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaDespesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
