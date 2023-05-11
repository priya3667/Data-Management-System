import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularIdComponent } from './particular-id.component';

describe('ParticularIdComponent', () => {
  let component: ParticularIdComponent;
  let fixture: ComponentFixture<ParticularIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticularIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
