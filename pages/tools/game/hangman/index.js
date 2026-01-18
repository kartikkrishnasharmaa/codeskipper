// pages/index.js
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SimpleLayout from "@/components/SimpleLayout";

const HangmanGame = () => {
  const [playerName, setPlayerName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [selectedWord, setSelectedWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  
  const words = ['python', 'javascript', 'function', 'array', 'loop', 'algorithm'];
  const maxWrongGuesses = 6;
  
  const inputRef = useRef(null);

  // Initialize game
  const startGame = () => {
    if (!playerName.trim()) {
      setNotificationMessage('Please enter your name to start the game!');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }
    
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSelectedWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setGameWon(false);
    setGameStarted(true);
  };

  // Handle letter guess
  const handleGuess = (letter) => {
    if (gameOver || guessedLetters.includes(letter)) return;
    
    setGuessedLetters([...guessedLetters, letter]);
    
    if (!selectedWord.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      
      if (newWrongGuesses >= maxWrongGuesses) {
        setGameOver(true);
      }
    } else {
      // Check if player has won
      const wordLetters = [...new Set(selectedWord.split(''))];
      const correctGuesses = wordLetters.filter(l => guessedLetters.includes(l)).length;
      
      if (correctGuesses + 1 === wordLetters.length) {
        setGameWon(true);
        setGameOver(true);
      }
    }
  };

  // Reset game
  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setGameWon(false);
    setPlayerName('');
  };

  // Display word with guessed letters
  const displayWord = () => {
    return selectedWord.split('').map((letter, index) => (
      <motion.span
        key={index}
        className="inline-block mx-1 text-3xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {guessedLetters.includes(letter) ? letter : '_'}
      </motion.span>
    ));
  };

  // Keyboard component
  const Keyboard = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    return (
      <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-md mx-auto">
        {alphabet.map(letter => (
          <motion.button
            key={letter}
            className={`w-10 h-10 rounded-lg font-bold text-lg ${
              guessedLetters.includes(letter) 
                ? selectedWord.includes(letter) 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter) || gameOver}
          >
            {letter}
          </motion.button>
        ))}
      </div>
    );
  };

  // Hangman drawing with emoji
  const HangmanDrawing = () => {
    const hangmanParts = [
      // Head
      wrongGuesses >= 1 && (
        <motion.div
          key="head"
          className="w-12 h-12 rounded-full border-4 border-gray-800 absolute top-12 left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      ),
      // Body
      wrongGuesses >= 2 && (
        <motion.div
          key="body"
          className="w-1 h-16 bg-gray-800 absolute top-24 left-1/2 transform -translate-x-1/2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      ),
      // Left Arm
      wrongGuesses >= 3 && (
        <motion.div
          key="left-arm"
          className="w-1 h-10 bg-gray-800 absolute top-28 left-1/2 transform -translate-x-1/2 -rotate-45 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      ),
      // Right Arm
      wrongGuesses >= 4 && (
        <motion.div
          key="right-arm"
          className="w-1 h-10 bg-gray-800 absolute top-28 left-1/2 transform -translate-x-1/2 rotate-45 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      ),
      // Left Leg
      wrongGuesses >= 5 && (
        <motion.div
          key="left-leg"
          className="w-1 h-10 bg-gray-800 absolute top-40 left-1/2 transform -translate-x-1/2 -rotate-45 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      ),
      // Right Leg
      wrongGuesses >= 6 && (
        <motion.div
          key="right-leg"
          className="w-1 h-10 bg-gray-800 absolute top-40 left-1/2 transform -translate-x-1/2 rotate-45 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      ),
    ];

    return (
      <div className="relative w-64 h-64 mx-auto mb-8">
        {/* Gallows */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gray-800"></div>
        <div className="absolute bottom-0 left-1/4 w-2 h-64 bg-gray-800"></div>
        <div className="absolute top-0 left-1/4 w-32 h-2 bg-gray-800"></div>
        <div className="absolute top-0 left-1/4 transform translate-x-32 w-2 h-12 bg-gray-800"></div>
        
        {/* Hangman */}
        {hangmanParts}
      </div>
    );
  };

  // Focus on input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <SimpleLayout>
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white flex flex-col items-center justify-center p-4">
      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            {notificationMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Title */}
      <motion.h1 
        className="text-5xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tech Hangman
      </motion.h1>
      <motion.p 
        className="text-xl mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Guess the hidden technology word!
      </motion.p>

      {/* Player Name Input */}
      {!gameStarted && (
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Enter Your Name</h2>
          <div className="mb-6">
            <input
              ref={inputRef}
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Your name here..."
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
              onKeyPress={(e) => e.key === 'Enter' && startGame()}
            />
          </div>
          <motion.button
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
          >
            Start Game
          </motion.button>
        </motion.div>
      )}

      {/* Game Screen */}
      {gameStarted && (
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Player Info */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-lg">Player: <span className="font-bold">{playerName}</span></p>
              <p className="text-lg">Wrong guesses: <span className="font-bold">{wrongGuesses}/{maxWrongGuesses}</span></p>
            </div>
            <motion.button
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetGame}
            >
              New Game
            </motion.button>
          </div>

          {/* Hangman Drawing */}
          <HangmanDrawing />

          {/* Word Display */}
          <div className="text-center my-8 min-h-12">
            {displayWord()}
          </div>

          {/* Keyboard */}
          <Keyboard />

          {/* Game Over Message */}
          <AnimatePresence>
            {gameOver && (
              <motion.div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-purple-700 to-blue-800 rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h2 className="text-3xl font-bold mb-4">
                    {gameWon ? '🎉 Congratulations! 🎉' : '💀 Game Over! 💀'}
                  </h2>
                  <p className="text-xl mb-2">
                    {gameWon 
                      ? `Amazing, ${playerName}! You guessed the word!` 
                      : `Sorry ${playerName}, better luck next time!`}
                  </p>
                  <p className="mb-6">
                    The word was: <span className="font-bold text-2xl">{selectedWord}</span>
                  </p>
                  <div className="flex gap-4">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-bold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={resetGame}
                    >
                      Play Again
                    </motion.button>
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setGameStarted(false);
                        setGameOver(false);
                      }}
                    >
                      Change Name
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
    </SimpleLayout>
  );
};

export default HangmanGame;