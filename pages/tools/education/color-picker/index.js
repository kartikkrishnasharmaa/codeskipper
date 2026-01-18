import React, { useState } from "react";
import { motion } from "framer-motion";
import SimpleLayout from "@/components/SimpleLayout";

const ColorPickerGradientGenerator = () => {
    const [color1, setColor1] = useState("#3498db");
    const [color2, setColor2] = useState("#e91e63");
    const [angle, setAngle] = useState(90);

    // Utility to convert HEX → RGB
    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
    };

    const rgbToHex = (r, g, b) => {
        return (
            "#" +
            [r, g, b]
                .map((x) => {
                    const hex = x.toString(16);
                    return hex.length === 1 ? "0" + hex : hex;
                })
                .join("")
        );
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert(`Copied: ${text}`);
    };

    return (
        <>
            <SimpleLayout>
                <div className="min-h-screen bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                    >
                        🎨 Color Picker & Gradient Generator
                    </motion.h1>

                    {/* Color Inputs */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl border border-gray-200"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Color 1 */}
                            <div className="flex flex-col items-center space-y-3">
                                <label className="font-semibold text-gray-800 text-lg">
                                    Primary Color
                                </label>
                                <input
                                    type="color"
                                    value={color1}
                                    onChange={(e) => setColor1(e.target.value)}
                                    className="w-32 h-32 border-4 border-gray-300 rounded-full shadow-inner cursor-pointer"
                                />
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>
                                        <span className="font-bold">HEX:</span> {color1}{" "}
                                        <button
                                            onClick={() => handleCopy(color1)}
                                            className="ml-2 text-blue-600 underline"
                                        >
                                            Copy
                                        </button>
                                    </p>
                                    <p>
                                        <span className="font-bold">RGB:</span> rgb({hexToRgb(color1)}){" "}
                                        <button
                                            onClick={() => handleCopy(`rgb(${hexToRgb(color1)})`)}
                                            className="ml-2 text-blue-600 underline"
                                        >
                                            Copy
                                        </button>
                                    </p>
                                    <p>
                                        <span className="font-bold">RGBA:</span> rgba({hexToRgb(color1)}, 1)
                                    </p>
                                </div>
                            </div>

                            {/* Color 2 */}
                            <div className="flex flex-col items-center space-y-3">
                                <label className="font-semibold text-gray-800 text-lg">
                                    Secondary Color
                                </label>
                                <input
                                    type="color"
                                    value={color2}
                                    onChange={(e) => setColor2(e.target.value)}
                                    className="w-32 h-32 border-4 border-gray-300 rounded-full shadow-inner cursor-pointer"
                                />
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>
                                        <span className="font-bold">HEX:</span> {color2}{" "}
                                        <button
                                            onClick={() => handleCopy(color2)}
                                            className="ml-2 text-blue-600 underline"
                                        >
                                            Copy
                                        </button>
                                    </p>
                                    <p>
                                        <span className="font-bold">RGB:</span> rgb({hexToRgb(color2)})
                                    </p>
                                    <p>
                                        <span className="font-bold">RGBA:</span> rgba({hexToRgb(color2)}, 1)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Gradient Controls */}
                        <div className="mt-10 text-center">
                            <label className="font-semibold text-gray-800 text-lg">
                                Gradient Angle: {angle}°
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="360"
                                value={angle}
                                onChange={(e) => setAngle(e.target.value)}
                                className="w-full mt-2 accent-blue-600"
                            />
                        </div>

                        {/* Gradient Preview */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="mt-8 p-6 rounded-2xl border-2 border-gray-200 shadow-lg text-center"
                            style={{
                                background: `linear-gradient(${angle}deg, ${color1}, ${color2})`,
                            }}
                        >
                            <p className="text-white font-semibold text-lg drop-shadow-lg">
                                Gradient Preview
                            </p>
                        </motion.div>

                        {/* Gradient Code */}
                        <div className="mt-6 text-sm bg-gray-900 text-green-400 p-4 rounded-lg font-mono overflow-x-auto">
                            <p>
                                background: linear-gradient({angle}deg, {color1}, {color2});
                            </p>
                            <button
                                onClick={() =>
                                    handleCopy(`linear-gradient(${angle}deg, ${color1}, ${color2})`)
                                }
                                className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-700 transition"
                            >
                                Copy Gradient CSS
                            </button>
                        </div>
                    </motion.div>


                </div>
            </SimpleLayout>
        </>
    );
};

export default ColorPickerGradientGenerator;
