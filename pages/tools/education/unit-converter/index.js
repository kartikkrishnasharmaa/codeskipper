import React, { useState } from "react";
import { motion } from "framer-motion";
import SimpleLayout from "@/components/SimpleLayout";

const Tools = () => {
  // Unit Converter State
  const [length, setLength] = useState("");
  const [lengthUnit, setLengthUnit] = useState("m");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [temp, setTemp] = useState("");
  const [tempUnit, setTempUnit] = useState("c");
  const [storage, setStorage] = useState("");
  const [storageUnit, setStorageUnit] = useState("B");

  // Conversion logic
  const convertLength = () => {
    if (!length) return "";
    let val = parseFloat(length);
    switch (lengthUnit) {
      case "m": return `${val * 100} cm`;
      case "cm": return `${val / 100} m`;
      case "km": return `${val * 1000} m`;
      default: return "";
    }
  };

  const convertWeight = () => {
    if (!weight) return "";
    let val = parseFloat(weight);
    switch (weightUnit) {
      case "kg": return `${val * 1000} g`;
      case "g": return `${val / 1000} kg`;
      case "lb": return `${(val * 0.453592).toFixed(2)} kg`;
      default: return "";
    }
  };

  const convertTemp = () => {
    if (!temp) return "";
    let val = parseFloat(temp);
    switch (tempUnit) {
      case "c": return `${(val * 9 / 5 + 32).toFixed(2)} °F`;
      case "f": return `${((val - 32) * 5 / 9).toFixed(2)} °C`;
      default: return "";
    }
  };

  const convertStorage = () => {
    if (!storage) return "";
    let val = parseFloat(storage);
    const units = ["b", "B", "KB", "MB", "GB", "TB", "PB"];
    const index = units.indexOf(storageUnit);
    if (index === -1) return "";

    // Convert to bytes first
    let bytes = val;
    switch (storageUnit) {
      case "b": bytes = val / 8; break;
      case "B": bytes = val; break;
      case "KB": bytes = val * 1024; break;
      case "MB": bytes = val * 1024 ** 2; break;
      case "GB": bytes = val * 1024 ** 3; break;
      case "TB": bytes = val * 1024 ** 4; break;
      case "PB": bytes = val * 1024 ** 5; break;
      default: bytes = val;
    }

    // Convert to all units for display
    return `
Bits: ${(bytes * 8).toLocaleString()} b
Bytes: ${bytes.toLocaleString()} B
KB: ${(bytes / 1024).toLocaleString()} KB
MB: ${(bytes / 1024 ** 2).toLocaleString()} MB
GB: ${(bytes / 1024 ** 3).toLocaleString()} GB
TB: ${(bytes / 1024 ** 4).toLocaleString()} TB
PB: ${(bytes / 1024 ** 5).toLocaleString()} PB
    `;
  };

  return (
    <SimpleLayout>
      <div className="min-h-screen bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 flex flex-col items-center p-6 space-y-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-6 animate-pulse">
          Tools & Converters
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Length */}
          <motion.div
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col space-y-4 col-span-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-bold text-blue-600">Data Storage Converter</h2>
            <input
              type="number"
              className="border p-2 rounded-lg w-full"
              placeholder="Enter value"
              value={storage}
              onChange={(e) => setStorage(e.target.value)}
            />
            <select
              className="border p-2 rounded-lg w-full"
              value={storageUnit}
              onChange={(e) => setStorageUnit(e.target.value)}
            >
              <option value="b">Bit</option>
              <option value="B">Byte</option>
              <option value="KB">Kilobyte</option>
              <option value="MB">Megabyte</option>
              <option value="GB">Gigabyte</option>
              <option value="TB">Terabyte</option>
              <option value="PB">Petabyte</option>
            </select>
            <pre className="font-mono text-gray-700 mt-2 whitespace-pre-wrap">{convertStorage()}</pre>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-bold text-purple-600">Length Converter</h2>
            <input
              type="number"
              className="border p-2 rounded-lg w-full"
              placeholder="Enter value"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <select
              className="border p-2 rounded-lg w-full"
              value={lengthUnit}
              onChange={(e) => setLengthUnit(e.target.value)}
            >
              <option value="m">Meter</option>
              <option value="cm">Centimeter</option>
              <option value="km">Kilometer</option>
            </select>
            <p className="font-mono text-gray-700 mt-2">Result: {convertLength()}</p>
          </motion.div>

          {/* Weight */}
          <motion.div
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-bold text-pink-600">Weight Converter</h2>
            <input
              type="number"
              className="border p-2 rounded-lg w-full"
              placeholder="Enter value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <select
              className="border p-2 rounded-lg w-full"
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
            >
              <option value="kg">Kilogram</option>
              <option value="g">Gram</option>
              <option value="lb">Pound</option>
            </select>
            <p className="font-mono text-gray-700 mt-2">Result: {convertWeight()}</p>
          </motion.div>

          {/* Temperature */}
          <motion.div
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-bold text-red-600">Temperature Converter</h2>
            <input
              type="number"
              className="border p-2 rounded-lg w-full"
              placeholder="Enter value"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
            />
            <select
              className="border p-2 rounded-lg w-full"
              value={tempUnit}
              onChange={(e) => setTempUnit(e.target.value)}
            >
              <option value="c">Celsius</option>
              <option value="f">Fahrenheit</option>
            </select>
            <p className="font-mono text-gray-700 mt-2">Result: {convertTemp()}</p>
          </motion.div>

          {/* Data Storage */}

        </div>
      </div>
    </SimpleLayout>
  );
};

export default Tools;
