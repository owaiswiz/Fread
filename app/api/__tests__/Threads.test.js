import { getThreads } from '../Threads';

let threads;

beforeAll(async () => {
  threads = await getThreads("g");
});

describe('getThreads', () => {
  it('returns a non-empty array', () => {
    expect(Array.isArray(threads)).toBe(true);
    expect(threads.length).toBeGreaterThan(0);
  });

  it('returns atleast one valid thread', () => {
    const thread = threads[0];
    expect(thread.no).toBeDefined();
    expect(thread.title || thread.text).toBeDefined();
    expect(thread.name).toBeDefined();
    expect(thread.createdAt).toBeDefined();
    expect(thread.lastModifiedAt).toBeDefined();
    expect(thread.noOfReplies).toBeGreaterThanOrEqual(0);
    expect(thread.noOfImages).toBeGreaterThanOrEqual(0);
    expect(thread.imageURL).toMatch(/\./);
    expect(thread.thumbnailURL).toMatch(/jpg/);
  });

});
