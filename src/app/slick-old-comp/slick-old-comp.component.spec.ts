import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickOldCompComponent } from './slick-old-comp.component';

describe('SlickOldCompComponent', () => {
  let component: SlickOldCompComponent;
  let fixture: ComponentFixture<SlickOldCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlickOldCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlickOldCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
