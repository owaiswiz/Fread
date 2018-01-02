/*
 * 4Chan API needs the If-Modified-Since header. The parameter modifiedSince is set to
 * the UNIX epoch if it is not specified which should force the API to return valid data
 */
export const request = (url, modifiedSince = (new Date(0)).toUTCString()) => {
  return fetch(url, {
    headers: {
      'If-Modified-Since': modifiedSince
    }
  });
};
