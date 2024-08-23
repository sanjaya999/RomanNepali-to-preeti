import React, { useState } from 'react';
import { convertToNepaliUnicode } from './convertToNepaliUnicode.js';

function Use() {
  const [preetiInput, setPreetiInput] = useState('');

  const handleInputChange = (e) => {
    const fullText = e.target.value;
    console.log('Full Text:', fullText);

    if (fullText.length === 0) {
      setPreetiInput('');
      return;
    }

    const lastLetter = fullText[fullText.length - 1];
    console.log('Last Letter:', lastLetter);

    // Temporarily store the input before modification
    let updatedText = fullText;

    if (lastLetter === " ") {
      const words = fullText.trim().split(' ');
      console.log('Words:', words);

      let lastWord = words[words.length - 1];
      console.log('Last Word:', lastWord);

      if (lastWord !== '') {
        const convertedWord = convertToNepaliUnicode(lastWord);
        console.log('Converted Word:', convertedWord);

        words[words.length - 1] = convertedWord;
        updatedText = words.join(' ') + ' '; // Update the text with the converted word
      }
    }

    // Set the updated text back to the state
    setPreetiInput(updatedText);
    console.log('Updated Text:', updatedText);

  };

  return (
    <div>
      <textarea
        value={preetiInput}
        onChange={handleInputChange}
        placeholder="Enter text in English"
      />
    </div>
  );
}

export default Use;
