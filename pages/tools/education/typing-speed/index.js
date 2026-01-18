import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import html2canvas from 'html2canvas';
import SimpleLayout from "@/components/SimpleLayout";


export default function TypingSpeedTest() {
  const [userName, setUserName] = useState('');
  const [input, setInput] = useState('');
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [testStarted, setTestStarted] = useState(false);
  
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // Sample paragraphs for different difficulty levels
 const paragraphs = {
  easy: [
    "The quick brown fox jumps over the lazy dog. Learning to type efficiently is an essential skill for every computer user. With regular practice, anyone can improve their typing speed and accuracy. Typing allows programmers and students to express their ideas clearly and execute commands faster on a computer.",
    "Programming is fun and challenging. It involves writing instructions that a computer can understand and execute. Learning to code opens many opportunities in the tech industry, from web development to artificial intelligence. Even simple projects can teach problem-solving and logical thinking skills that are useful in everyday life.",
    "Practice makes perfect when it comes to typing. By spending a few minutes each day typing paragraphs or code, you gradually build muscle memory. Regular practice can significantly improve your typing speed, reduce errors, and enhance your overall efficiency when using a computer or developing software."
  ],
  medium: [
    "JavaScript is a versatile programming language that powers modern web applications. It runs on both client and server sides, allowing developers to build dynamic and interactive websites. Understanding concepts like asynchronous programming, closures, and the Document Object Model (DOM) can help programmers write more efficient and scalable code.",
    "Computer science involves the study of computational systems, algorithms, and their applications in solving real-world problems. It combines theoretical knowledge with practical implementation, including programming, software engineering, and data analysis. A strong foundation in logic and mathematics is often essential for tackling complex problems.",
    "Typing speed is measured in words per minute, but accuracy and consistency are equally important. Efficient typing helps in coding, debugging, and writing technical documentation. Knowledge of keyboard shortcuts, proper hand positioning, and regular practice can make a significant difference in productivity and workflow efficiency."
  ],
  hard: [
    "Algorithmic complexity analysis is a fundamental aspect of computer science, helping developers understand the efficiency and scalability of their code. Concepts such as Big O notation, time and space complexity, and optimization strategies provide a theoretical framework for evaluating algorithms, enabling the design of high-performance software systems.",
    "Machine learning algorithms require substantial computational resources and carefully curated datasets to produce accurate predictions. Understanding concepts like neural networks, gradient descent, overfitting, and feature engineering is crucial for building models that generalize well and perform reliably in diverse real-world scenarios.",
    "Distributed systems architecture enables the development of scalable and fault-tolerant applications by distributing workloads across multiple servers. Topics such as consensus algorithms, load balancing, replication, and eventual consistency are critical for ensuring system reliability and efficiency in large-scale computing environments."
  ]
};


  const [currentParagraph, setCurrentParagraph] = useState('');
  const [currentStats, setCurrentStats] = useState({
    wpm: 0,
    accuracy: 100,
    correctChars: 0,
    incorrectChars: 0,
    rank: 'Beginner'
  });

  const [history, setHistory] = useState([]);

  // Initialize test
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem('typingHistory');
      const savedName = localStorage.getItem('userName');
      if (savedHistory) setHistory(JSON.parse(savedHistory));
      if (savedName) setUserName(savedName);
    }
    selectRandomParagraph();
  }, [difficulty]);

  const selectRandomParagraph = () => {
    const availableParagraphs = paragraphs[difficulty];
    const randomIndex = Math.floor(Math.random() * availableParagraphs.length);
    setCurrentParagraph(availableParagraphs[randomIndex]);
    resetTest();
  };

  const resetTest = () => {
    setInput('');
    setTimeElapsed(0);
    setIsRunning(false);
    setIsTestComplete(false);
    setTestStarted(false);
    setCurrentStats({
      wpm: 0,
      accuracy: 100,
      correctChars: 0,
      incorrectChars: 0,
      rank: 'Beginner'
    });
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const startTest = () => {
    if (!userName.trim()) {
      alert('Please enter your name to start the test');
      return;
    }
    setTestStarted(true);
    setIsRunning(true);
    setInput('');
    setTimeElapsed(0);
    setIsTestComplete(false);
    
    localStorage.setItem('userName', userName);

    timerRef.current = setInterval(() => {
      setTimeElapsed(prev => {
        const newTime = prev + 1;
        if (newTime >= 60) {
          completeTest();
          return 60;
        }
        return newTime;
      });
    }, 1000);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const completeTest = () => {
    setIsRunning(false);
    setIsTestComplete(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    const wordsTyped = input.trim().split(/\s+/).filter(word => word.length > 0).length;
    const wpm = timeElapsed > 0 ? Math.round((wordsTyped / timeElapsed) * 60) : 0;
    
    const correctChars = input.split('').filter((char, index) => 
      index < currentParagraph.length && char === currentParagraph[index]
    ).length;
    
    const totalChars = Math.max(input.length, 1);
    const accuracy = Math.round((correctChars / totalChars) * 100);
    const incorrectChars = input.length - correctChars;

    // Determine rank
    let rank = 'Beginner';
    if (wpm >= 60 && accuracy >= 98) rank = 'Expert';
    else if (wpm >= 40 && accuracy >= 95) rank = 'Advanced';
    else if (wpm >= 25 && accuracy >= 90) rank = 'Intermediate';
    else if (wpm >= 15) rank = 'Beginner';
    else rank = 'Novice';

    const newStats = {
      wpm,
      accuracy,
      correctChars,
      incorrectChars,
      rank
    };

    setCurrentStats(newStats);

    // Save to history
    const testResult = {
      id: Date.now(),
      userName,
      wpm,
      accuracy,
      rank,
      difficulty,
      date: new Date().toLocaleDateString(),
      time: timeElapsed
    };

    const newHistory = [testResult, ...history.slice(0, 9)];
    setHistory(newHistory);
    localStorage.setItem('typingHistory', JSON.stringify(newHistory));

    // Play completion sound
    if (soundEnabled) {
      const audio = new Audio('/complete-sound.mp3');
      audio.play().catch(() => {});
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (!isRunning && value.length > 0 && testStarted) {
      setIsRunning(true);
    }

    // Check if user completed the paragraph
    if (value.length >= currentParagraph.length) {
      completeTest();
    }

    // Play typing sound
    if (soundEnabled && value.length > input.length) {
      const audio = new Audio('/keypress-sound.mp3');
      audio.volume = 0.1;
      audio.play().catch(() => {});
    }
  };

  const calculateProgress = () => {
    return Math.min((input.length / currentParagraph.length) * 100, 100);
  };

  const getCharacterClass = (index) => {
    if (index >= input.length) return 'text-gray-600';
    if (input[index] === currentParagraph[index]) return 'text-green-500';
    return 'text-red-500 bg-red-100';
  };

  const exportAsImage = async () => {
    const element = document.getElementById('results-card');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff'
      });
     
    } catch (error) {
      console.error('Error exporting image:', error);
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 'Expert': return 'text-purple-600';
      case 'Advanced': return 'text-blue-600';
      case 'Intermediate': return 'text-green-600';
      case 'Beginner': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <SimpleLayout>
    <div className="min-h-screen bg-white text-black py-8 px-4">
      <Head>
        <title>Typing Speed Test | Computer Education</title>
        <meta name="description" content="Test your typing speed and improve your skills" />
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Typing Speed Test
          </h1>
          <p className="text-lg text-gray-600">
            Test and improve your typing skills in a professional environment
          </p>
        </div>

        {/* User Info Section */}
        {!testStarted && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <button
                onClick={startTest}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Start Test
              </button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Test Area */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Stats Bar */}
              <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{timeElapsed}s</div>
                  <div className="text-sm text-gray-600">Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{currentStats.wpm}</div>
                  <div className="text-sm text-gray-600">WPM</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{currentStats.accuracy}%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getRankColor(currentStats.rank)}`}>
                    {currentStats.rank}
                  </div>
                  <div className="text-sm text-gray-600">Rank</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>

              {/* Paragraph Display */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border-2 border-gray-200 min-h-[120px]">
                <p className="text-lg leading-relaxed font-mono">
                  {currentParagraph.split('').map((char, index) => (
                    <span key={index} className={getCharacterClass(index)}>
                      {char}
                    </span>
                  ))}
                </p>
              </div>

              {/* Input Area */}
              <textarea
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                disabled={!testStarted || isTestComplete}
                placeholder={testStarted ? "Start typing here..." : "Click Start Test to begin"}
                className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-lg"
              />

              {/* Controls */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={startTest}
                  disabled={isRunning}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors"
                >
                  {isTestComplete ? 'Restart Test' : 'Start Test'}
                </button>
                
                <button
                  onClick={selectRandomParagraph}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  New Paragraph
                </button>

                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    soundEnabled 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                  }`}
                >
                  Sound: {soundEnabled ? 'ON' : 'OFF'}
                </button>

                {isTestComplete && (
                  <button
                    onClick={exportAsImage}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Export Results
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results and History Sidebar */}
          <div className="space-y-6">
            {/* Current Results Card */}
            {isTestComplete && (
              <div id="results-card" className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Test Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-semibold">{userName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">WPM:</span>
                    <span className="font-bold text-blue-600">{currentStats.wpm}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accuracy:</span>
                    <span className="font-bold text-green-600">{currentStats.accuracy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-semibold">{timeElapsed}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-semibold capitalize">{difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rank:</span>
                    <span className={`font-bold ${getRankColor(currentStats.rank)}`}>
                      {currentStats.rank}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* History Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Recent Tests</h3>
              {history.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No test history yet</p>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {history.map((test) => (
                    <div key={test.id} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{test.userName}</span>
                        <span className={`text-sm font-bold ${getRankColor(test.rank)}`}>
                          {test.rank}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-1">
                        <span>{test.wpm} WPM</span>
                        <span>{test.accuracy}%</span>
                        <span>{test.difficulty}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {test.date} • {test.time}s
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">How to Improve:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Practice regularly</li>
                <li>• Maintain proper posture</li>
                <li>• Use all fingers</li>
                <li>• Don't look at the keyboard</li>
                <li>• Focus on accuracy first</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </SimpleLayout>
  );
}
