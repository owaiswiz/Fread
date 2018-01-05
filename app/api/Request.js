/*
 * 4Chan API needs the If-Modified-Since header. The parameter modifiedSince is set to
 * the UNIX epoch if it is not specified which should force the API to return valid data
 */
import { AllHtmlEntities } from 'html-entities';

export const request = (url, modifiedSince = (new Date(0)).toUTCString()) => {
  return fetch(url, {
    headers: {
      'If-Modified-Since': modifiedSince
    }
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      const entities = new AllHtmlEntities();
      const responseJSONString = JSON.stringify(responseJSON).replace(/&quot;/gi,'\\"').replace(/<br>/g,"\\n").replace(/<wbr>/g,"");
      const decodedJSONString = entities.decode(responseJSONString);
      return JSON.parse(decodedJSONString);
    });
};
