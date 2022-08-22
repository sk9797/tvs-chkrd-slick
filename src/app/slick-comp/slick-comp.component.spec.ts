import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickCompComponent } from './slick-comp.component';

describe('SlickCompComponent', () => {
  let component: SlickCompComponent;
  let fixture: ComponentFixture<SlickCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlickCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlickCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
