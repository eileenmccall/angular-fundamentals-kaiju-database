import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaijuListComponent } from './kaiju-list.component';

describe('KaijuListComponent', () => {
  let component: KaijuListComponent;
  let fixture: ComponentFixture<KaijuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaijuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaijuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
