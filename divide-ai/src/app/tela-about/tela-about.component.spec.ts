import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAboutComponent } from './tela-about.component';

describe('TelaAboutComponent', () => {
  let component: TelaAboutComponent;
  let fixture: ComponentFixture<TelaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
