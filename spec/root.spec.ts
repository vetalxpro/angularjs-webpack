import { root } from '../lib/root';
import { normalize } from 'path';

describe('lib/root', () => {
  it('should return path string', () => {
    expect(root('dir1', 'dir2', 'file.ts')).toEqual(normalize(`${process.cwd()}/dir1/dir2/file.ts`));
  });

  it('should return root path string', () => {
    expect(root()).toEqual(normalize(`${process.cwd()}`));
  });
});
