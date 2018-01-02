import { getThreads } from '../Threads';

const threads = getThreads("/g/");
describe('getThreads', () => {
  it('returns a non-empty array', () => {
    expect(Array.isArray(threads)).toBe(true);
    expect(threads.length).toBeGreaterThan(0);
  });
  it('returns thread with all valid fields', () => {
    const thread = threads[0];
    expect(thread.no).toBeDefined();
    expect(thread.title || thread.text).toBeDefined();
    expect(thread.createdAt).toBeDefined();
    expect(thread.lastModifiedAt).toBeDefined();
    expect(thread.noOfReplies).toBeGreaterThanEqual(0);
    expect(thread.noOfImages).toBeGreaterThanEqual(0);
    expect(thread.imageURL).toMatch(/\./);
    expect(thread.thumbnailURL).toMatch(/jpg/);
  });

});
