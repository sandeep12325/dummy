import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipcardComponent } from './flipcard.component';

describe('FlipcardComponent', () => {
  let component: FlipcardComponent;
  let fixture: ComponentFixture<FlipcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlipcardComponent]
    });
    fixture = TestBed.createComponent(FlipcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
