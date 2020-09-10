import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionSettingComponent } from './promotion-setting.component';

describe('PromotionSettingComponent', () => {
  let component: PromotionSettingComponent;
  let fixture: ComponentFixture<PromotionSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
