import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShortcutNavComponent } from './app-shortcut-nav.component';

describe('AppShortcutNavComponent', () => {
  let component: AppShortcutNavComponent;
  let fixture: ComponentFixture<AppShortcutNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShortcutNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShortcutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
