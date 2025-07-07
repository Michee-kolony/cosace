import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosaceComponent } from './cosace.component';

describe('CosaceComponent', () => {
  let component: CosaceComponent;
  let fixture: ComponentFixture<CosaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CosaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
