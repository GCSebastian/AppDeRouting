import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MidelPage } from './midel.page';

describe('MidelPage', () => {
  let component: MidelPage;
  let fixture: ComponentFixture<MidelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MidelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
