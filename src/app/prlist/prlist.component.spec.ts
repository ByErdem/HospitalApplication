import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrlistComponent } from './prlist.component';

describe('PrlistComponent', () => {
  let component: PrlistComponent;
  let fixture: ComponentFixture<PrlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
