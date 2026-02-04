import { AtualizarComponent } from './atualizar.component';
import { setupComponentTest } from '../testing/test-helpers';

describe('AtualizarComponent', () => {
  let component: AtualizarComponent;

  beforeEach(async () => {
    const result = await setupComponentTest(AtualizarComponent);
    fixture = result.fixture;
    component = result.instance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
