import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsshowComponent } from './shopsshow.component';

describe('ShopsshowComponent', () => {
  let component: ShopsshowComponent;
  let fixture: ComponentFixture<ShopsshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopsshowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopsshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
