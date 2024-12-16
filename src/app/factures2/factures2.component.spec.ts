import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Factures2Component } from './factures2.component';

describe('Factures2Component', () => {
  let component: Factures2Component;
  let fixture: ComponentFixture<Factures2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Factures2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Factures2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
