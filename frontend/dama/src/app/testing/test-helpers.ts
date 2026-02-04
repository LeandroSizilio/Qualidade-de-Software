import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';

/**
 * Helper function to reduce duplication in component spec files
 * Sets up basic component testing configuration and returns fixture and component
 */
export async function setupComponentTest<T>(component: Type<T>): Promise<{
  fixture: ComponentFixture<T>;
  instance: T;
}> {
  await TestBed.configureTestingModule({
    imports: [component],
  }).compileComponents();

  const fixture = TestBed.createComponent(component);
  const instance = fixture.componentInstance;
  fixture.detectChanges();

  return { fixture, instance };
}
