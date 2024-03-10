import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcaoComponent } from './ahorcao.component';

describe('AhorcaoComponent', () => {
  let component: AhorcaoComponent;
  let fixture: ComponentFixture<AhorcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhorcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
