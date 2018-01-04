import moment from 'moment';
import { request } from './Request';

/*
 * Returns an array of replies of the thread specified.
 * Optional lastRequestAt which is a date (used to set the
 * If-Modified-Since) header in the request to the 4Chan API.
 * Each reply is a object with the following keys :
 * 1) no
 * 2) text
 * 3) name: name of the user who created the reply (by default Anonymous)
 * 4) createdAt: when the reply was created
 * 5) imageURL: main image URL of thread
 * 6) thumbnailURL: thumbnail URL of thread
 */
export const getReplies = (board, threadNo, lastRequestAt) => {
  const requestURL = `http://a.4cdn.org/${board}/thread/${threadNo}.json`;
  return request(requestURL,lastRequestAt)
    .then((response) => response.json())
    .then((responseJSON) => {
      let arrayOfReplies = [];
      responseJSON.posts.map((rawReply) => {
        let currentReply          = {};
        const timeInMilli         = rawReply.tim;
        const fileExtention       = rawReply.ext;

        currentReply.no           = rawReply.no;
        currentReply.text         = rawReply.com;
        currentReply.name         = rawReply.name;
        currentReply.createdAt    = moment(rawReply.time * 1000).fromNow();
        currentReply.thumbnailURL = `http://i.4cdn.org/${board}/${timeInMilli}s.jpg`;
        currentReply.imageURL     = `http://i.4cdn.org/${board}/${timeInMilli}${fileExtention}`;

        arrayOfReplies.push(currentReply);
      });
      return arrayOfReplies;
    });
};
