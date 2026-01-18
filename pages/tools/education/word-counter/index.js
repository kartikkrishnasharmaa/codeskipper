import React, { useState } from "react";
import { motion } from "framer-motion";
import SimpleLayout from "@/components/SimpleLayout";

const WordCounter = () => {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
  };

  const handleCopy = () => {
    if (text.trim() !== "") {
      navigator.clipboard.writeText(text);
      alert("Text copied to clipboard!");
    }
  };

  const wordsArray = text.trim() === "" ? [] : text.trim().split(/\s+/);
  const wordCount = wordsArray.length;
  const charCount = text.length;
  const readingTime = Math.ceil(wordCount / 200); // 200 WPM average

  return (
    <SimpleLayout>
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-yellow-50 to-orange-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-yellow-600 to-orange-600 mb-6 animate-pulse">
        Word & Character Counter
      </h1>

      <textarea
        className="w-full max-w-2xl h-48 p-4 border-2 border-gray-300 rounded-lg shadow-lg focus:ring-4 focus:ring-green-200 transition-all duration-300 resize-none text-gray-800 font-mono text-sm"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-wrap space-x-4 mt-4">
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
        >
          Clear
        </button>
        <button
          onClick={handleCopy}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Copy Text
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 w-full max-w-2xl p-4 bg-gray-900 text-white rounded-lg shadow-lg font-mono text-sm space-y-2"
      >
        <p>
          <span className="font-bold text-green-400">Words:</span> {wordCount}
        </p>
        <p>
          <span className="font-bold text-yellow-400">Characters:</span> {charCount}
        </p>
        <p>
          <span className="font-bold text-purple-400">Estimated Reading Time:</span>{" "}
          {readingTime} min
        </p>

        {wordsArray.length > 0 && (
          <div className="mt-2">
            <p className="font-bold text-blue-400">Highlighted Long Words (8+ chars):</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {wordsArray
                .filter((word) => word.length > 8)
                .map((word, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-orange-500 text-white rounded-lg text-xs animate-pulse"
                  >
                    {word}
                  </span>
                ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
    </SimpleLayout>
  );
};

export default WordCounter;
