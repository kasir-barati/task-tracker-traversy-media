import { JsonEntriesPipe } from './json-entries.pipe';

describe('JsonEntriesPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonEntriesPipe();
    expect(pipe).toBeTruthy();
  });
});
