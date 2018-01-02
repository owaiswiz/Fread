import { request } from './Request';

/*
 * Return an array of threads of the board specified.
 * Optional lastRequestAt which is a date (used to set the
 * If-Modified-Since) header in the request to the 4Chan API.
 * Each thread is a object with the following keys :
 * 1) no
 * 2) title
 * 3) text
 * 4) createdAt: when the thread was created
 * 5) lastModifiedAt: time of latest reply 
 * 6) noOfReplies: no of replies
 * 7) noOfImages: no of images
 * 8) imageURL: main image URL of thread
 * 9) thumbnailURL: thumbnail URL of thread
 */
export const getThreads = (board, lastRequestAt) => {
  //todo
} ;
