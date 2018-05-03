import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashSignComponent } from './hash-sign.component';

describe('HashSignComponent', () => {
  let component: HashSignComponent;
  let fixture: ComponentFixture<HashSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
