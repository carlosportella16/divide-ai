import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponentComponent } from './result-component.component';

describe('ResultComponentComponent', () => {
  let component: ResultComponentComponent;
  let fixture: ComponentFixture<ResultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
