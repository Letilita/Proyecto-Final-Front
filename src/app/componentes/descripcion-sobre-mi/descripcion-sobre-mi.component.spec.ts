import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionSobreMiComponent } from './descripcion-sobre-mi.component';

describe('DescripcionSobreMiComponent', () => {
  let component: DescripcionSobreMiComponent;
  let fixture: ComponentFixture<DescripcionSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionSobreMiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
