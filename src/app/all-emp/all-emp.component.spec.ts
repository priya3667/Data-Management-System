import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmpComponent } from './all-emp.component';

describe('AllEmpComponent', () => {
  let component: AllEmpComponent;
  let fixture: ComponentFixture<AllEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
