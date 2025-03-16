import React, { useState, useEffect } from "react";
import "./TypingBox.css";

const TypingBox = ({ textArray, speed }) => {
  const [displayedText, setDisplayedText] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Define classes for different line styles
  const getLineClass = (index) => {
    if (index === 0) return "large-text"; // First line (Company & Location)
    if (index === 1) return "medium-text"; // Role & Technologies
    return "small-text"; // Default for other descriptions
  };

  useEffect(() => {
    if (lineIndex < textArray.length) {
      if (charIndex < textArray[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => {
            const newText = [...prev];
            newText[lineIndex] =
              (newText[lineIndex] || "") + textArray[lineIndex][charIndex];
            return newText;
          });
          setCharIndex((prev) => prev + 1);
        }, speed); // Typing speed

        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 50); // Delay before next line
      }
    }
  }, [charIndex, lineIndex, textArray]);

  return (
    <div className="typing-box">
      {displayedText.map((line, index) => (
        <div key={index} className={`typing-line ${getLineClass(index)}`}>
          {line}
          {index === lineIndex && <span className="cursor">|</span>}
        </div>
      ))}
    </div>
  );
};

export default TypingBox;
