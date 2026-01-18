'use client';
import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import SimpleLayout from '@/components/SimpleLayout';
import {
  Copy,
  RefreshCcw,
  Download,
  User,
  Mail,
  MapPin,
  Phone,
  FileText,
} from 'lucide-react';

// SEO Metadata
export const metadata = {
  title: 'Fake Data Generator | CodeSkipper',
  description:
    'Generate realistic mock names, emails, addresses and phone numbers in bulk for API testing and UI mockups. Copy or download as JSON / CSV.',
  keywords:
    'fake data generator, mock data, bulk mock data, api testing, json download, csv download, random names, fake emails',
  openGraph: {
    title: 'Fake Data Generator | CodeSkipper',
    description:
      'Create realistic fake names, emails, addresses, and phone numbers instantly for testing or demos.',
    url: 'https://codeskipper.in/tools/education/fake-data-generator',
    images: [{ url: '/images/logo.png', width: 1200, height: 630, alt: 'Fake Data Generator' }],
  },
};

// -------------------- Helpers --------------------
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateFakeRecord = (id = null) => {
  const firstNames = [
    'Aarav',
    'Kriti',
    'Vikram',
    'Neha',
    'Rajesh',
    'Simran',
    'Ishaan',
    'Priya',
    'Arjun',
    'Ananya',
    'Soham',
    'Riya',
    'Rahul',
    'Maya',
    'Karan',
  ];
  const lastNames = [
    'Sharma',
    'Patel',
    'Gupta',
    'Singh',
    'Kumar',
    'Yadav',
    'Reddy',
    'Nair',
    'Das',
    'Mehta',
    'Chaudhary',
    'Joshi',
  ];
  const streets = ['MG Road', 'Station Road', 'Park Street', 'Civil Lines', 'Ring Road', 'Sector 12'];
  const cities = ['Delhi', 'Mumbai', 'Bengaluru', 'Jaipur', 'Kolkata', 'Hyderabad', 'Pune', 'Chennai', 'Indore'];
  const states = ['Rajasthan', 'Maharashtra', 'Karnataka', 'West Bengal', 'Telangana', 'Tamil Nadu', 'Madhya Pradesh'];
  const firstName = randomItem(firstNames);
  const lastName = randomItem(lastNames);
  const city = randomItem(cities);
  const state = randomItem(states);
  const streetNumber = Math.floor(Math.random() * 200) + 1;
  const postalCode = Math.floor(100000 + Math.random() * 900000);
  const fullName = `${firstName} ${lastName}`;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
  const address = `${streetNumber}, ${randomItem(streets)}, ${city}, ${state} - ${postalCode}`;
  // Indian-style mobile numbers starting with 6-9
  const phone = `+91${Math.floor(6000000000 + Math.random() * 3999999999)}`;
  return {
    id,
    name: fullName,
    email,
    address,
    phone,
  };
};

const generateBulk = (count) => {
  const arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(generateFakeRecord(i));
  }
  return arr;
};

const jsonToCSV = (arr) => {
  if (!arr || arr.length === 0) return '';
  const keys = Object.keys(arr[0]);
  const lines = [keys.join(',')];
  arr.forEach((obj) => {
    const vals = keys.map((k) => {
      const v = obj[k] ?? '';
      // escape quotes and commas
      if (typeof v === 'string') {
        return `"${v.replace(/"/g, '""')}"`;
      }
      return v;
    });
    lines.push(vals.join(','));
  });
  return lines.join('\n');
};

// -------------------- Component --------------------
const FakeDataGeneratorPage = () => {
  const [count, setCount] = useState(5); // default 5 records
  const [records, setRecords] = useState([]);
  const [maxLimit] = useState(1000); // safety cap
  const [message, setMessage] = useState('');

  useEffect(() => {
  // Run only on client-side mount
  setRecords(generateBulk(5));
}, []);

  const handleGenerate = () => {
    const n = Math.max(1, Math.min(maxLimit, Math.floor(count)));
    const data = generateBulk(n);
    setRecords(data);
    setMessage(`Generated ${n} record${n > 1 ? 's' : ''}.`);
    setTimeout(() => setMessage(''), 2500);
  };

  const handleCopyJSON = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(records, null, 2));
      setMessage('✅ JSON copied to clipboard.');
      setTimeout(() => setMessage(''), 2000);
    } catch (err) {
      setMessage('Copy failed — please allow clipboard permissions.');
      setTimeout(() => setMessage(''), 2500);
    }
  };

  const handleCopyCSV = async () => {
    try {
      const csv = jsonToCSV(records);
      await navigator.clipboard.writeText(csv);
      setMessage('✅ CSV copied to clipboard.');
      setTimeout(() => setMessage(''), 2000);
    } catch (err) {
      setMessage('Copy failed — please allow clipboard permissions.');
      setTimeout(() => setMessage(''), 2500);
    }
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fake-data-${records.length}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadCSV = () => {
    const csv = jsonToCSV(records);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fake-data-${records.length}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleQuickRange = (preset) => {
    setCount(preset);
    const data = generateBulk(preset);
    setRecords(data);
    setMessage(`Generated ${preset} records.`);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <SimpleLayout>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto py-12 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 rounded-2xl shadow-lg border border-gray-200"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Fake Data Generator — Bulk Mock Data</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Generate realistic mock names, emails, addresses and Indian-style phone numbers for API testing or UI demos. Choose how many records you need, then copy or download as JSON / CSV.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 gap-3">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Number of records</label>
              <div className="mt-2 flex items-center gap-3">
                <input
                  type="number"
                  min={1}
                  max={maxLimit}
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  className="w-32 border rounded px-3 py-2"
                />
                <input
                  type="range"
                  min="1"
                  max={maxLimit}
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  className="flex-1"
                />
                <button
                  onClick={handleGenerate}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  <RefreshCcw className="w-4 h-4" /> Generate
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Max limit: {maxLimit} records. For very large exports, prefer JSON.</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <div className="text-sm text-gray-700">Quick presets:</div>
              {[1, 5, 10, 50, 100].map((p) => (
                <button
                  key={p}
                  onClick={() => handleQuickRange(p)}
                  className="px-3 py-1.5 rounded bg-gray-100 hover:bg-gray-200 text-sm"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Copy / Download Buttons */}
          <div className="mt-4 flex flex-wrap gap-3">
            <button onClick={handleCopyJSON} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              <Copy className="w-4 h-4" /> Copy JSON
            </button>

            <button onClick={handleCopyCSV} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded">
              <FileText className="w-4 h-4" /> Copy CSV
            </button>

            <button onClick={handleDownloadJSON} className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded">
              <Download className="w-4 h-4" /> Download JSON
            </button>

            <button onClick={handleDownloadCSV} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
              <Download className="w-4 h-4" /> Download CSV
            </button>

            <div className="ml-auto self-center text-sm text-gray-500">{message}</div>
          </div>
        </div>

        {/* Records Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Table / Cards */}
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-md font-semibold">Preview ({records.length})</h3>
                <div className="text-xs text-gray-500">Showing first 20 records</div>
              </div>

              <div className="space-y-3">
                {records.slice(0, 20).map((r) => (
                  <div key={r.id} className="flex items-start gap-3 border-b last:border-b-0 pb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700">
                      {r.name.split(' ').map((n) => n[0]).slice(0,2).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{r.name}</div>
                          <div className="text-xs text-gray-500">{r.email}</div>
                        </div>
                        <div className="text-xs text-gray-500">#{r.id}</div>
                      </div>
                      <div className="text-xs text-gray-600 mt-2">{r.address}</div>
                      <div className="text-xs text-gray-600 mt-1">{r.phone}</div>
                    </div>
                  </div>
                ))}
                {records.length === 0 && <div className="text-gray-500 text-sm">No records yet. Click Generate.</div>}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="text-sm font-medium mb-2">Quick actions</h4>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => { setRecords(generateBulk(records.length || 1)); setMessage('Regenerated same count.'); setTimeout(()=>setMessage(''),2000); }} className="px-3 py-1.5 bg-yellow-100 hover:bg-yellow-200 rounded text-sm">Regenerate same</button>
                <button onClick={() => { setRecords([]); setMessage('Cleared preview.'); setTimeout(()=>setMessage(''),1500); }} className="px-3 py-1.5 bg-red-100 hover:bg-red-200 rounded text-sm">Clear</button>
              </div>
            </div>
          </div>

          {/* Right: Raw JSON */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 h-[420px] overflow-auto">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-md font-semibold">Raw JSON</h3>
              <div className="text-xs text-gray-500">Copy / Download from above</div>
            </div>
            <pre className="text-xs bg-gray-50 border border-gray-100 rounded p-3 overflow-auto">
              <code>{JSON.stringify(records, null, 2)}</code>
            </pre>
          </div>
        </div>

        {/* Note */}
        <p className="text-xs text-gray-500 mt-6">
          Note: These values are randomly generated for development and testing purposes only. Do not use for real accounts or production PII.
        </p>
      </motion.div>
    </SimpleLayout>
  );
};

export default FakeDataGeneratorPage;
