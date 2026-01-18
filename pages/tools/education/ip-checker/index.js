'use client';
import React, { useState, useEffect } from 'react';
import { 
    FaMapMarkerAlt, FaCopy, FaDownload, FaSearch, FaGlobe, FaClock, FaCity 
} from 'react-icons/fa';
import SimpleLayout from '@/components/SimpleLayout';

export default function IPFinderEnhanced() {
    const [ipData, setIpData] = useState(null);
    const [inputIP, setInputIP] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchIPDetails(''); // auto-detect on load
    }, []);

    const fetchIPDetails = async (ip) => {
        setLoading(true);
        try {
            const res = await fetch(`https://ipwho.is/${ip}`);
            const data = await res.json();
            setIpData(data);
        } catch (err) {
            console.error(err);
            setIpData(null);
        }
        setLoading(false);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    };

    const downloadJSON = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(ipData, null, 2)], { type: 'application/json' });
        element.href = URL.createObjectURL(file);
        element.download = "ip-details.json";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <SimpleLayout>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white px-4 py-12">
                <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-8">
                    <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                        <FaMapMarkerAlt className="text-blue-400" /> IP Address & Location Finder
                    </h1>

                    {/* Search */}
                    <div className="flex gap-2 mb-6">
                        <input
                            type="text"
                            placeholder="Enter IP (optional)"
                            value={inputIP}
                            onChange={(e) => setInputIP(e.target.value)}
                            className="flex-1 px-4 py-2 rounded-xl bg-white/20 placeholder-gray-300 text-white outline-none"
                        />
                        <button
                            onClick={() => fetchIPDetails(inputIP)}
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl flex items-center gap-2"
                        >
                            <FaSearch /> Search
                        </button>
                    </div>

                    {/* Loading */}
                    {loading && <p className="text-center animate-pulse text-gray-300">Fetching location details...</p>}

                    {/* Data */}
                    {ipData && ipData.success && !loading ? (
                        <div className="space-y-4">

                            {/* IP & Proxy */}
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">IP Address:</span>
                                <span className="flex items-center gap-2">
                                    {ipData.ip}{' '}
                                    <FaCopy className="cursor-pointer hover:text-blue-400" onClick={() => copyToClipboard(ipData.ip)} />
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Type:</span>
                                <span>{ipData.type} {ipData.proxy ? '(Proxy/VPN)' : ''}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">ISP / Org:</span>
                                <span>{ipData.connection?.isp || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">ASN:</span>
                                <span>{ipData.connection?.asn || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Domain:</span>
                                <span>{ipData.connection?.domain || 'N/A'}</span>
                            </div>

                            {/* Location */}
                            <div className="flex justify-between">
                                <span className="font-semibold">City / Region / Country:</span>
                                <span>{ipData.city}, {ipData.region}, {ipData.country} ({ipData.country_code})</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Continent:</span>
                                <span>{ipData.continent} ({ipData.continent_code})</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Capital:</span>
                                <span>{ipData.capital}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Postal Code:</span>
                                <span>{ipData.postal}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Calling Code:</span>
                                <span>+{ipData.calling_code}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Borders:</span>
                                <span>{ipData.borders}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">Flag:</span>
                                <span className="flex items-center gap-2">
                                    <img src={ipData.flag?.img} alt="flag" className="w-6 h-4" />
                                    {ipData.flag?.emoji}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Latitude / Longitude:</span>
                                <span>{ipData.latitude}, {ipData.longitude}</span>
                            </div>

                            {/* Timezone */}
                            <div className="flex justify-between">
                                <span className="font-semibold">Timezone:</span>
                                <span>
                                    {ipData.timezone?.id} ({ipData.timezone?.abbr}) UTC {ipData.timezone?.utc}<br />
                                    Current Time: {ipData.timezone?.current_time}
                                </span>
                            </div>

                            {/* Map */}
                            <div className="mt-6 rounded-xl overflow-hidden border-2 border-blue-500">
                                <iframe
                                    title="map"
                                    width="100%"
                                    height="300"
                                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${ipData.longitude - 0.1},${ipData.latitude - 0.1},${ipData.longitude + 0.1},${ipData.latitude + 0.1}&layer=mapnik&marker=${ipData.latitude},${ipData.longitude}`}
                                ></iframe>
                            </div>

                            {/* Download JSON */}
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={downloadJSON}
                                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl flex items-center gap-2"
                                >
                                    <FaDownload /> Download JSON
                                </button>
                            </div>
                        </div>
                    ) : (
                        !loading && <p className="text-center text-red-400">❌ Could not fetch location data.</p>
                    )}

                    <p className="mt-6 text-sm text-gray-400 text-center">
                        Powered by <a href="https://ipwho.is" className="text-blue-400 hover:underline">ipwho.is API</a>
                    </p>
                </div>
            </div>
        </SimpleLayout>
    );
}
