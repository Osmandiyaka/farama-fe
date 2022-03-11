import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaramaUIShareComponent } from './farama-ui-share.component';

describe('FaramaUIShareComponent', () => {
  let component: FaramaUIShareComponent;
  let fixture: ComponentFixture<FaramaUIShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaramaUIShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaramaUIShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
