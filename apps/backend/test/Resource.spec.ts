import { Resource } from '../src/common/entities/Resource';

describe('Resource', () => {
  it('resourceType should  be defined when initializing a Resouce', () => {
    class TestResource extends Resource<any> {}
    try {
      new TestResource({});
    } catch (e) {
      expect(e instanceof Error).toBeTruthy();
      // TODO: check error message
      // expect(e?.message).toBe('no resource type specified on TestResource');
    }
  });
});
