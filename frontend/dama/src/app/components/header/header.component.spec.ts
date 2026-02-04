import { HeaderComponent } from './header.component';
import { setupComponentTest } from '../../testing/test-helpers';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(async () => {
    const result = await setupComponentTest(HeaderComponent);
    fixture = result.fixture;
    component = result.instance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
