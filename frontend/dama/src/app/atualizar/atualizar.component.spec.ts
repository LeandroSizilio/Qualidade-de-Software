import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarComponent } from './atualizar.component';
import { setupComponentTest } from '../testing/test-helpers';

describe('AtualizarComponent', () => {
  let component: AtualizarComponent;
  let fixture: ComponentFixture<AtualizarComponent>;

  beforeEach(async () => {
    const result = await setupComponentTest(AtualizarComponent);
    fixture = result.fixture;
    component = result.instance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
