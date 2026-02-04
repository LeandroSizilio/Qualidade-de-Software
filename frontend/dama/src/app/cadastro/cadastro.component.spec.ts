import { CadastroComponent } from './cadastro.component';
import { setupComponentTest } from '../testing/test-helpers';

describe('CadastroComponent', () => {
  let component: CadastroComponent;

  beforeEach(async () => {
    const result = await setupComponentTest(CadastroComponent);
    fixture = result.fixture;
    component = result.instance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
