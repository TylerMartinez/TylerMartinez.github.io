import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyperwriterComponent } from './typerwriter.component';

describe('TyperwriterComponent', () => {
  let component: TyperwriterComponent;
  let fixture: ComponentFixture<TyperwriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyperwriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyperwriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
