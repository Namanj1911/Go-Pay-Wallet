import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconversionsComponent } from './viewconversions.component';

describe('ViewconversionsComponent', () => {
  let component: ViewconversionsComponent;
  let fixture: ComponentFixture<ViewconversionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewconversionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
