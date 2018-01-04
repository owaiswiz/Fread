/* global jasmine */
import { getThreads } from '../Threads';
import { getReplies } from '../Thread';

let thread,replies;

beforeAll(async () => {
  const board = "g";
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  thread = (await getThreads(board))[1];
  replies = await getReplies(board,thread.no); 
});

/*
 *  Here, we can be sure that there is atleast one reply, i.e, the replies array 
 *  is non-empty because the OP is included as a reply.
 */

describe('getReplies', () => {
  it('returns a non-empty array', () => {
    expect(Array.isArray(replies)).toBe(true);
    expect(replies.length).toBeGreaterThan(0);
  });

  it('returns atleast one valid reply', () => {
    const reply = replies[0];
    expect(reply.no).toBeDefined();
    expect(reply.name).toBeDefined();
    expect(reply.createdAt).toBeDefined();
    if(!reply.text) {
      expect(reply.imageURL).toMatch(/\./);
      expect(reply.thumbnailURL).toMatch(/jpg/);
    }
  });
});
