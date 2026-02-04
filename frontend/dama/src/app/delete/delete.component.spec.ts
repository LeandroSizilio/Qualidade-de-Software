import { DeleteComponent } from './delete.component';
import { setupComponentTest } from '../testing/test-helpers';

describe('DeleteComponent', () => {
  let component: DeleteComponent;

  beforeEach(async () => {
    const result = await setupComponentTest(DeleteComponent);
    fixture = result.fixture;
    component = result.instance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
