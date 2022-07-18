import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbarComponent } from './sbar.component';

describe('SbarComponent', () => {
  let component: SbarComponent;
  let fixture: ComponentFixture<SbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
