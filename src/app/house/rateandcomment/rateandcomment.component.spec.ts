import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateandcommentComponent } from './rateandcomment.component';

describe('RateandcommentComponent', () => {
  let component: RateandcommentComponent;
  let fixture: ComponentFixture<RateandcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateandcommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateandcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
