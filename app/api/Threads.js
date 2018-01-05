import moment from 'moment';
import { request } from './Request';

/*
 * Return an array of threads of the board specified.
 * Optional lastRequestAt which is a date (used to set the
 * If-Modified-Since) header in the request to the 4Chan API.
 * Each thread is a object with the following keys :
 * 1)  no
 * 2)  title
 * 3)  text
 * 4)  name: name of the user you created the thread (by default Anonymous)
 * 5)  createdAt: when the thread was created
 * 6)  lastModifiedAt: time of latest reply 
 * 7)  noOfReplies: no of replies
 * 8)  noOfImages: no of images
 * 9)  imageURL: main image URL of thread
 * 10) thumbnailURL: thumbnail URL of thread
 */
export const getThreads = (board, lastRequestAt) => {
  const requestURL = `http://a.4cdn.org/${board}/catalog.json`;
  return request(requestURL,lastRequestAt)
    .then((responseJSON) => {
      let arrayOfThreads = [];
      responseJSON.map((page) => {
        page.threads.map((rawThread) => {
          let currentThread            = {};
          const timeInMilli            = rawThread.tim;
          const fileExtention          = rawThread.ext;

          currentThread.no             = rawThread.no;
          currentThread.title          = rawThread.sub;
          currentThread.text           = rawThread.com;
          currentThread.name           = rawThread.name;
          currentThread.noOfReplies    = rawThread.replies;
          currentThread.noOfImages     = rawThread.images;
          currentThread.createdAt      = moment(rawThread.time * 1000).fromNow();
          currentThread.lastModifiedAt = moment(rawThread.last_modified * 1000).fromNow();
          currentThread.thumbnailURL   = `http://i.4cdn.org/${board}/${timeInMilli}s.jpg`;
          currentThread.imageURL       = `http://i.4cdn.org/${board}/${timeInMilli}${fileExtention}`;

          arrayOfThreads.push(currentThread);
        });
      });
      return arrayOfThreads;
    });
};
