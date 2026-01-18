import React, { useEffect, useState, useRef } from 'react';
import SimpleLayout from "@/components/SimpleLayout";

const TECH_ICONS = [
  '💻', '🖥️', '📱', '☕', '🐍', '⚛️', '🟦', '🗄️',
  '🔧', '⚡', '🌐', '💾', '📊', '🔒', '🚀', '🎮'
];

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [firstIdx, setFirstIdx] = useState(null);
  const [secondIdx, setSecondIdx] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [best, setBest] = useState(null); // Start with null to avoid hydration mismatch
  const [userName, setUserName] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [cardSize, setCardSize] = useState(80);
  const [isClient, setIsClient] = useState(false); // Track client-side rendering
  const timerRef = useRef(null);
  const audioRef = useRef(null);
  const gameBoardRef = useRef(null);

  // Set client-side flag and initialize best score from localStorage
  useEffect(() => {
    setIsClient(true);
    const storedBest = localStorage.getItem('memory_best');
    if (storedBest) {
      try {
        setBest(JSON.parse(storedBest));
      } catch {
        setBest(null);
      }
    }
  }, []);

  // Calculate responsive card size based on screen width
  useEffect(() => {
    if (!isClient) return;

    const updateCardSize = () => {
      const width = window.innerWidth;
      if (width < 640) { // Mobile
        setCardSize(70);
      } else if (width < 768) { // Small tablet
        setCardSize(80);
      } else if (width < 1024) { // Tablet
        setCardSize(90);
      } else { // Desktop
        setCardSize(100);
      }
    };

    updateCardSize();
    window.addEventListener('resize', updateCardSize);
    return () => window.removeEventListener('resize', updateCardSize);
  }, [isClient]);

  // Initialize audio context only on client side
  useEffect(() => {
    if (!isClient) return;

    audioRef.current = new (window.AudioContext || window.webkitAudioContext)();
    
    return () => {
      clearInterval(timerRef.current);
      if (audioRef.current) {
        audioRef.current.close();
      }
    };
  }, [isClient]);

  useEffect(() => {
    if (firstIdx !== null && secondIdx !== null) {
      checkMatch();
    }
  }, [secondIdx]);

  useEffect(() => {
    const allMatched = cards.length && cards.every(c => c.matched);
    if (allMatched && running) {
      setRunning(false);
      setGameCompleted(true);
      setShowConfetti(true);
      clearInterval(timerRef.current);
      playSound('win');
      
      // Update best score
      const score = { moves, time, userName };
      if (!best || (moves < best.moves) || (moves === best.moves && time < best.time)) {
        const newBest = score;
        setBest(newBest);
        if (isClient) {
          try { localStorage.setItem('memory_best', JSON.stringify(newBest)); } catch {}
        }
      }
      
      // Hide confetti after 5 seconds
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [cards]);

  function initGame() {
    if (!userName.trim()) return;
    
    clearInterval(timerRef.current);
    setTime(0);
    setRunning(false);
    setMoves(0);
    setFirstIdx(null);
    setSecondIdx(null);
    setDisabled(false);
    setGameCompleted(false);
    setShowConfetti(false);

    const pairCount = 8; // Number of pairs
    const selectedIcons = TECH_ICONS.slice(0, pairCount);
    const pairs = shuffleArray([...selectedIcons, ...selectedIcons]).map((icon, idx) => ({
      id: idx,
      icon,
      flipped: false,
      matched: false,
    }));

    setCards(shuffleArray(pairs));
    setShowNameInput(false);
  }

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
    setRunning(true);
  }

  function handleCardClick(index) {
    if (disabled || !userName) return;
    if (!running) startTimer();
    const card = cards[index];
    if (card.flipped || card.matched) return;

    playSound('flip');

    const newCards = cards.slice();
    newCards[index] = { ...card, flipped: true };
    setCards(newCards);

    if (firstIdx === null) {
      setFirstIdx(index);
    } else if (secondIdx === null) {
      setSecondIdx(index);
      setMoves(m => m + 1);
    }
  }

  function checkMatch() {
    const first = cards[firstIdx];
    const second = cards[secondIdx];
    if (!first || !second) return;

    if (first.icon === second.icon) {
      playSound('match');
      const newCards = cards.slice();
      newCards[firstIdx] = { ...newCards[firstIdx], matched: true };
      newCards[secondIdx] = { ...newCards[secondIdx], matched: true };
      setCards(newCards);
      resetSelectionShort();
    } else {
      setDisabled(true);
      setTimeout(() => {
        const newCards = cards.slice();
        newCards[firstIdx] = { ...newCards[firstIdx], flipped: false };
        newCards[secondIdx] = { ...newCards[secondIdx], flipped: false };
        setCards(newCards);
        resetSelectionShort();
      }, 1000);
    }
  }

  function resetSelectionShort() {
    setFirstIdx(null);
    setSecondIdx(null);
    setDisabled(false);
  }

  function handleRestart() {
    initGame();
  }

  function handleNewPlayer() {
    setUserName('');
    setShowNameInput(true);
    setCards([]);
    setRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
    setMoves(0);
    setGameCompleted(false);
  }

  // Sound effects - only play on client side
  const playSound = (type) => {
    if (!isClient || !audioRef.current) return;
    
    const audioContext = audioRef.current;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'flip') {
      oscillator.frequency.value = 400;
      gainNode.gain.value = 0.1;
      oscillator.type = 'sine';
    } else if (type === 'match') {
      oscillator.frequency.value = 800;
      gainNode.gain.value = 0.2;
      oscillator.type = 'sine';
    } else if (type === 'win') {
      oscillator.frequency.value = 1200;
      gainNode.gain.value = 0.3;
      oscillator.type = 'triangle';
    }
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');

  // Show loading state until client-side rendering is ready
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <div className="text-4xl mb-4">🎮</div>
          <div className="text-xl text-gray-600">Loading Memory Game...</div>
        </div>
      </div>
    );
  }

  return (
    <SimpleLayout>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 -right-10 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && <Confetti />}

      <div className="w-full max-w-6xl mx-auto z-10">
        {/* Name Input Modal */}
        {showNameInput && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100 mx-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome to Memory Flip!
              </h2>
              <p className="text-gray-600 text-center mb-6 text-sm md:text-base">Enter your name to start the game</p>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 text-base md:text-lg"
                onKeyPress={(e) => e.key === 'Enter' && initGame()}
              />
              <button
                onClick={initGame}
                disabled={!userName.trim()}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-lg"
              >
                Start Game 🚀
              </button>
            </div>
          </div>
        )}

        {/* Game Completed Modal */}
        {gameCompleted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100 mx-4">
              <div className="text-center">
                <div className="text-5xl md:text-6xl mb-4">🎉</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Congratulations{userName ? `, ${userName}` : ''}!
                </h2>
                <p className="text-gray-600 mb-4 text-sm md:text-base">You've completed the memory game!</p>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                  <div className="p-3 md:p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                    <div className="text-xl md:text-2xl font-bold text-green-600">{moves}</div>
                    <div className="text-xs md:text-sm text-gray-600">Moves</div>
                  </div>
                  <div className="p-3 md:p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-xl md:text-2xl font-bold text-purple-600">{minutes}:{seconds}</div>
                    <div className="text-xs md:text-sm text-gray-600">Time</div>
                  </div>
                </div>

                {best && (
                  <div className="mb-6 p-3 md:p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <div className="text-xs md:text-sm font-semibold text-yellow-800">🏆 Best Score</div>
                    <div className="text-sm md:text-lg font-bold text-yellow-700">
                      {best.moves} moves • {Math.floor(best.time/60)}:{(best.time%60).toString().padStart(2,'0')}
                      {best.userName && ` by ${best.userName}`}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleRestart}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Play Again 🔄
                  </button>
                  <button
                    onClick={handleNewPlayer}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    New Player 👤
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-6 md:mb-8 px-2">
<h1 className="text-2xl sm:text-3xl md:text-4xl pb-4 lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-relaxed">
            Memory Flip Challenge
          </h1>
          {userName && (
            <p className="text-base mt-4 md:text-lg text-gray-600">
              Welcome, <span className="font-semibold text-blue-600">{userName}</span>!
            </p>
          )}
            <div className="mt-4 md:mt-6 text-center px-2">
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg border border-white/20">
            <span className="text-sm md:text-lg">💡</span>
            <span className="text-xs md:text-sm text-gray-600">
              Click cards to reveal tech symbols. Match all pairs with the fewest moves!
            </span>
          </div>
        </div>
        </div>

        {/* Stats Panel */}
        <div className="mb-6 md:mb-8 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 px-2">
          <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
            <div className="text-xs md:text-sm text-gray-500 font-medium">Moves</div>
            <div className="text-xl md:text-2xl font-bold text-gray-800">{moves}</div>
          </div>
          <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
            <div className="text-xs md:text-sm text-gray-500 font-medium">Time</div>
            <div className="text-xl md:text-2xl font-bold text-gray-800">{minutes}:{seconds}</div>
          </div>
          <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
            <div className="text-xs md:text-sm text-gray-500 font-medium">Status</div>
            <div className="text-xl md:text-2xl font-bold text-gray-800">{running ? '🎯' : '⏸️'}</div>
          </div>
          <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
            <div className="text-xs md:text-sm text-gray-500 font-medium">Best Score</div>
            <div className="text-xs md:text-sm font-semibold text-gray-800">
              {best ? `${best.moves} moves • ${Math.floor(best.time/60)}:${(best.time%60).toString().padStart(2,'0')}` : '—'}
            </div>
          </div>
        </div>

        {/* Game Controls */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6 md:mb-8 px-2">
          <button
            onClick={handleRestart}
            className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>🔄</span> Restart Game
          </button>
          <button
            onClick={handleNewPlayer}
            className="px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>👤</span> New Player
          </button>
        </div>

        {/* Game Board */}
        <div 
          ref={gameBoardRef}
          className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/20 mx-auto"
          style={{ 
            maxWidth: '100%',
            overflow: 'hidden'
          }}
        >
          <div 
            className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 mx-auto justify-items-center"
            style={{ 
              maxWidth: '100%',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
            }}
          >
            {cards.map((card, idx) => (
              <ResponsiveCard
                key={card.id}
                card={card}
                onClick={() => handleCardClick(idx)}
                index={idx}
                size={cardSize}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
      
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .floating { animation: float 3s ease-in-out infinite; }
      `}</style>

    </div>
    </SimpleLayout>
  );
}

function ResponsiveCard({ card, onClick, index, size }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!card.flipped && !card.matched) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
      onClick();
    }
  };

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-300 ${
        isAnimating ? 'transform scale-95' : 'hover:scale-105'
      } ${card.matched ? 'opacity-80' : ''}`}
      onClick={handleClick}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        width: `${size}px`,
        height: `${size}px`
      }}
    >
      <div
        className={`relative w-full h-full transition-all duration-600 ${
          card.flipped || card.matched ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: card.flipped || card.matched ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Back of Card */}
        <div
          className="absolute inset-0 rounded-xl md:rounded-2xl flex items-center justify-center backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
            border: '3px solid rgba(255,255,255,0.3)'
          }}
        >
          <div className="text-white font-bold floating" style={{ fontSize: `${size * 0.3}px` }}>?</div>
          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>

        {/* Front of Card */}
        <div
          className="absolute inset-0 rounded-xl md:rounded-2xl flex items-center justify-center backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: card.matched 
              ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
              : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
            border: card.matched ? '3px solid #10b981' : '3px solid rgba(255,255,255,0.3)'
          }}
        >
          <span 
            className="transition-all duration-300"
            style={{
              fontSize: `${size * 0.4}px`,
              filter: card.matched ? 'drop-shadow(0 4px 8px rgba(16, 185, 129, 0.4))' : 'none',
              transform: card.matched ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            {card.icon}
          </span>
          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
          
          {/* Match Glow Effect */}
          {card.matched && (
            <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-green-400 opacity-20 animate-pulse"></div>
          )}
        </div>
      </div>
    </div>
  );
}

// Confetti Component
function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {[...Array(150)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}