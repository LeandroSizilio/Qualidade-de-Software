import { MaterialComponent } from './material.component';
import { setupComponentTest } from '../testing/test-helpers';

describe('MaterialComponent', () => {
  let component: MaterialComponent;

  beforeEach(async () => {
    const result = await setupComponentTest(MaterialComponent);
    fixture = result.fixture;
    component = result.instance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
