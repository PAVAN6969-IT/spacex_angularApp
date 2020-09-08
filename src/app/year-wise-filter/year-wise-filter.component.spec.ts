import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearWiseFilterComponent } from './year-wise-filter.component';

describe('YearWiseFilterComponent', () => {
  let component: YearWiseFilterComponent;
  let fixture: ComponentFixture<YearWiseFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearWiseFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearWiseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
