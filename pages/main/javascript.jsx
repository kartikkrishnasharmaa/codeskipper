"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Switch } from "@headlessui/react";

// Load Monaco Editor dynamically (no SSR)
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function JSCompilerPage() {
  const [code, setCode] = useState(`// Try JavaScript below
function add(a, b) {
  return a + b;
}
console.log("Sum:", add(5, 10));`);
  const [output, setOutput] = useState("");
  const [theme, setTheme] = useState("vs-dark");
  const [layout, setLayout] = useState("horizontal");

  const runCode = () => {
    let logs = "";
    const originalLog = console.log;
    console.log = (msg) => {
      logs += msg + "\n";
    };
    try {
      // eslint-disable-next-line no-eval
      eval(code);
      setOutput(logs || "✅ Code ran without output.");
    } catch (err) {
      setOutput("❌ Error: " + err.message);
    } finally {
      console.log = originalLog;
    }
  };

  return (
    <div className={`min-h-screen ${theme === "vs-dark" ? "bg-gray-900 text-white" : "bg-white text-black"} p-4`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">🧠 JavaScript Online Compiler</h1>

        <div className="flex items-center gap-4">
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

          <label className="flex items-center gap-2">
            📐 Layout
            <select
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
              className="p-1 rounded bg-gray-100 text-black text-sm"
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </label>
        </div>
      </div>

      <div className={`flex ${layout === "horizontal" ? "flex-col md:flex-row" : "flex-col"} gap-4`}>
        <div className="w-full md:w-1/2 h-[400px]">
          <MonacoEditor
            height="100%"
            language="javascript"
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

        <div className="w-full md:w-1/2">
          <button
            onClick={runCode}
            className="mb-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            ▶️ Run Code
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
