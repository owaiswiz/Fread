import { StyleSheet } from 'react-native';
import { Text } from 'native-base';
import React from 'react';

export const parseText = (text) => {
  if(!text)
    return null;
  let matchedHtml;
  let parsedOutput       = [];
  let fragments          = [{start: -1, end: -1}];
  const htmlMatcherRegex = /(<(.*?).*?>(.*?)<\/\2>)/g;

  for(;;) {
    let lastElement = fragments[fragments.length - 1];
    matchedHtml = htmlMatcherRegex.exec(text);

    if(matchedHtml == null) {
      if(lastElement.end != text.length - 1)
        fragments.push({start: lastElement.end + 1, end: text.length - 1});
      break;
    }
    else {
      let startIndex = matchedHtml.index;
      let endIndex = matchedHtml[1].length - 1 + startIndex;
      if(lastElement.end + 1 != startIndex) 
        fragments.push({start: lastElement.end + 1, end: startIndex - 1});
      fragments.push({start: startIndex, end: endIndex});
    }
  } 

  for(let i = 1; i < fragments.length; i++) {
    let matchedText, greenText, linkText, boldText, italicText, underlineText;
    let currentToken = text.substring(fragments[i].start, fragments[i].end + 1);

    if(currentToken.includes("<span "))
      greenText = true;
    if(currentToken.includes("<a "))
      linkText = true;
    if(currentToken.includes("<b>"))
      boldText = true;
    if(currentToken.includes("<i>"))
      italicText = true;
    if(currentToken.includes("<u>"))
      underlineText = true;

    while((matchedText = htmlMatcherRegex.exec(currentToken)) != null) {
      currentToken = matchedText[3];
      htmlMatcherRegex.lastIndex = 0;
    }
    parsedOutput.push(
      <Text
        key={i}
        style={[
          greenText     ? styles.greenText : null,
          linkText      ? styles.linkText : null,
          boldText      ? styles.boldText : null,
          italicText    ? styles.italicText : null,
          underlineText ? styles.underlineText : null,
        ]}
      >
        {currentToken}
      </Text>
    );
  }
  return parsedOutput;
};

const styles = StyleSheet.create({
  greenText: {
    color: '#789922',
  },
  linkText: {
    color: 'blue',
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic'
  },
  underlineText: {
    textDecorationLine: 'underline', 
  },
});
