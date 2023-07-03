import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCarComponent } from './upload-car.component';

describe('UploadCarComponent', () => {
  let component: UploadCarComponent;
  let fixture: ComponentFixture<UploadCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
