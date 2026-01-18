import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SimpleLayout from "@/components/SimpleLayout";

const JsonFormatter = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const pretty = JSON.stringify(parsed, null, 2);
      setFormattedJson(pretty);
      setError("");
    } catch (err) {
      setError("Invalid JSON! Please check your input.");
      setFormattedJson("");
    }
  };

  const handleClear = () => {
    setJsonInput("");
    setFormattedJson("");
    setError("");
  };

  return (
    <SimpleLayout>
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 animate-pulse">
        JSON Formatter
      </h1>

      <textarea
        className="w-full max-w-2xl h-48 p-4 border-2 border-gray-300 rounded-lg shadow-lg focus:ring-4 focus:ring-blue-200 transition-all duration-300 resize-none text-gray-800 font-mono text-sm"
        placeholder="Paste your JSON here..."
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />

      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleFormat}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Format JSON
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
        >
          Clear
        </button>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 text-red-600 font-semibold"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {formattedJson && !error && (
          <motion.pre
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-6 w-full max-w-2xl p-4 bg-gray-900 text-green-400 rounded-lg shadow-lg overflow-auto text-sm font-mono"
          >
            {formattedJson}
          </motion.pre>
        )}
      </AnimatePresence>
    </div>
    </SimpleLayout>
  );
};

export default JsonFormatter;
