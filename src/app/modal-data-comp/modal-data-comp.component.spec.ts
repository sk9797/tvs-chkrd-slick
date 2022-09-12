import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDataCompComponent } from './modal-data-comp.component';

describe('ModalDataCompComponent', () => {
  let component: ModalDataCompComponent;
  let fixture: ComponentFixture<ModalDataCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDataCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDataCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
