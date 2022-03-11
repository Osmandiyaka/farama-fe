import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaramaShareComponent } from './farama-share.component';

describe('FaramaShareComponent', () => {
  let component: FaramaShareComponent;
  let fixture: ComponentFixture<FaramaShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaramaShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaramaShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
