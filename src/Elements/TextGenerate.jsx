import React, { useEffect, useState, useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Text from './Text';

const TextGenerate = ({ First, Second, Third }) => {

  return (
    <div className='h-full'>
      <ReactTypingEffect text={[First, Second, Third]} eraseDelay={4000} typingDelay={1000} speed={50} eraseSpeed={50} cursor="|"/>
    </div>
  );
};

export default TextGenerate;
