import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraPalTijraComponent } from './piedra-pal-tijra.component';

describe('PiedraPalTijraComponent', () => {
  let component: PiedraPalTijraComponent;
  let fixture: ComponentFixture<PiedraPalTijraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedraPalTijraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiedraPalTijraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
