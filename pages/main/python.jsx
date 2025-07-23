"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Switch } from "@headlessui/react";

// Monaco Editor dynamic import (no SSR)
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function PythonCompiler() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState(`# Python Compiler Example
number = -5

if number >= 0:
    print("The number is positive.")
else:
    print("The number is negative.")

`);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("vs-dark");

  // Load pyodide script and interpreter
  useEffect(() => {
    const loadPyodideScriptAndInit = async () => {
      setLoading(true);
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js";
      script.onload = async () => {
        if (window.loadPyodide) {
          const pyodideInstance = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",
          });
          setPyodide(pyodideInstance);
          setLoading(false);
        }
      };
      document.body.appendChild(script);
    };

    loadPyodideScriptAndInit();
  }, []);

  const runPython = async () => {
    if (!pyodide) return;

    try {
      await pyodide.loadPackagesFromImports(code);

      // Clear old output
      setOutput("");

      // Redirect Python stdout and stderr
      pyodide.setStdout({
        batched: (msg) => setOutput((prev) => prev + msg),
      });
      pyodide.setStderr({
        batched: (err) => setOutput((prev) => prev + "❌ Error: " + err),
      });

      pyodide.runPython(code);
    } catch (err) {
      setOutput("❌ JS Error: " + err.message);
    }
  };

  return (
    <div className={`min-h-screen ${theme === "vs-dark" ? "bg-gray-900 text-white" : "bg-white text-black"} p-4`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">🐍 Python Online Compiler</h1>
        <label className="flex items-center gap-2">
          🌗 Dark Mode
          <Switch
            checked={theme === "vs-dark"}
            onChange={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}
            className={`${theme === "vs-dark" ? "bg-green-600" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition" />
          </Switch>
        </label>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Code Editor */}
        <div className="w-full md:w-1/2 h-[400px]">
          <MonacoEditor
            height="100%"
            language="python"
            theme={theme}
            value={code}
            onChange={(val) => setCode(val || "")}
            options={{
              fontSize: 14,
              lineNumbers: "on",
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
            }}
          />
        </div>

        {/* Output Console */}
        <div className="w-full md:w-1/2">
          <button
            onClick={runPython}
            disabled={loading}
            className="mb-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded disabled:opacity-50"
          >
            ▶️ {loading ? "Loading Pyodide..." : "Run Code"}
          </button>

          <div className={`h-[360px] overflow-auto border rounded p-4 ${theme === "vs-dark" ? "bg-black text-green-300" : "bg-gray-100 text-black"}`}>
            <h2 className="font-bold mb-2">🖥 Output:</h2>
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
