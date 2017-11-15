import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2ExempleComponent } from './ng2-exemple.component';

describe('Ng2ExempleComponent', () => {
  let component: Ng2ExempleComponent;
  let fixture: ComponentFixture<Ng2ExempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2ExempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
