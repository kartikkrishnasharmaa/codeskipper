// pages/sorting-game.js
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SimpleLayout from "@/components/SimpleLayout";


const SortingGame = () => {
  const [playerName, setPlayerName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameMode, setGameMode] = useState(''); // 'visualization' or 'quiz'
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [currentAlgorithm, setCurrentAlgorithm] = useState('');
  const [animationSpeed, setAnimationSpeed] = useState(500);
  const [swapCount, setSwapCount] = useState(0);
  const [comparisonCount, setComparisonCount] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [arraySize, setArraySize] = useState(10);
  
  const inputRef = useRef(null);

  // Initialize the array with random values
  const generateArray = (size = arraySize) => {
    const newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push({
        value: Math.floor(Math.random() * 100) + 10,
        id: i,
        isComparing: false,
        isSwapping: false,
        isSorted: false,
        isPivot: false
      });
    }
    setArray(newArray);
    setSwapCount(0);
    setComparisonCount(0);
  };

  // Start the game
  const startGame = (mode) => {
    if (!playerName.trim()) {
      setNotificationMessage('Please enter your name to start the game!');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }
    
    setGameMode(mode);
    setGameStarted(true);
    generateArray();
    setQuizCompleted(false);
    setUserGuess('');
  };

  // Reset the game
  const resetGame = () => {
    setGameStarted(false);
    setGameMode('');
    setPlayerName('');
    setSorting(false);
    setQuizCompleted(false);
  };

  // Bubble Sort Algorithm
  const bubbleSort = async () => {
    if (sorting) return;
    
    setSorting(true);
    setCurrentAlgorithm('Bubble Sort');
    let swaps = 0;
    let comparisons = 0;
    
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Highlight comparing elements
        arr[j].isComparing = true;
        arr[j + 1].isComparing = true;
        setArray([...arr]);
        comparisons++;
        setComparisonCount(comparisons);
        
        await new Promise(resolve => setTimeout(resolve, animationSpeed));
        
        if (arr[j].value > arr[j + 1].value) {
          // Highlight swapping elements
          arr[j].isSwapping = true;
          arr[j + 1].isSwapping = true;
          setArray([...arr]);
          
          await new Promise(resolve => setTimeout(resolve, animationSpeed / 2));
          
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swaps++;
          setSwapCount(swaps);
          
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, animationSpeed / 2));
          
          // Reset swapping state
          arr[j].isSwapping = false;
          arr[j + 1].isSwapping = false;
        }
        
        // Reset comparing state
        arr[j].isComparing = false;
        arr[j + 1].isComparing = false;
        
        // Mark sorted element
        if (j === n - i - 2) {
          arr[j + 1].isSorted = true;
        }
      }
    }
    
    // Mark all as sorted
    arr.forEach(item => item.isSorted = true);
    setArray([...arr]);
    setSorting(false);
  };

  // Insertion Sort Algorithm
  const insertionSort = async () => {
    if (sorting) return;
    
    setSorting(true);
    setCurrentAlgorithm('Insertion Sort');
    let swaps = 0;
    let comparisons = 0;
    
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      
      // Highlight key element
      key.isComparing = true;
      setArray([...arr]);
      
      await new Promise(resolve => setTimeout(resolve, animationSpeed));
      
      while (j >= 0 && arr[j].value > key.value) {
        comparisons++;
        setComparisonCount(comparisons);
        
        // Highlight comparing element
        arr[j].isComparing = true;
        setArray([...arr]);
        
        await new Promise(resolve => setTimeout(resolve, animationSpeed / 2));
        
        // Move element to the right
        arr[j + 1] = arr[j];
        swaps++;
        setSwapCount(swaps);
        
        // Reset comparing state
        arr[j].isComparing = false;
        setArray([...arr]);
        
        await new Promise(resolve => setTimeout(resolve, animationSpeed / 2));
        
        j--;
      }
      
      // Place key in correct position
      arr[j + 1] = key;
      swaps++;
      setSwapCount(swaps);
      
      // Reset key comparing state
      arr[j + 1].isComparing = false;
      
      // Mark sorted elements
      for (let k = 0; k <= i; k++) {
        arr[k].isSorted = true;
      }
      
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, animationSpeed));
    }
    
    setSorting(false);
  };

  // Merge Sort Algorithm
  const mergeSort = async () => {
    if (sorting) return;
    
    setSorting(true);
    setCurrentAlgorithm('Merge Sort');
    setSwapCount(0);
    setComparisonCount(0);
    
    const arr = [...array];
    await performMergeSort(arr, 0, arr.length - 1);
    
    // Mark all as sorted
    arr.forEach(item => item.isSorted = true);
    setArray([...arr]);
    setSorting(false);
  };

  // Helper function for Merge Sort
  const performMergeSort = async (arr, left, right) => {
    if (left >= right) return;
    
    const mid = Math.floor((left + right) / 2);
    
    await performMergeSort(arr, left, mid);
    await performMergeSort(arr, mid + 1, right);
    await merge(arr, left, mid, right);
  };

  // Merge function for Merge Sort
  const merge = async (arr, left, mid, right) => {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
    
    let i = 0, j = 0, k = left;
    let swaps = 0;
    let comparisons = 0;
    
    while (i < leftArr.length && j < rightArr.length) {
      // Highlight comparing elements
      arr[left + i].isComparing = true;
      arr[mid + 1 + j].isComparing = true;
      setArray([...arr]);
      
      comparisons++;
      setComparisonCount(comparisons);
      
      await new Promise(resolve => setTimeout(resolve, animationSpeed));
      
      if (leftArr[i].value <= rightArr[j].value) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
        swaps++;
        setSwapCount(prev => prev + 1);
      }
      
      // Reset comparing state
      if (i < leftArr.length) arr[left + i].isComparing = false;
      if (j < rightArr.length) arr[mid + 1 + j].isComparing = false;
      
      k++;
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, animationSpeed / 2));
    }
    
    while (i < leftArr.length) {
      arr[k] = leftArr[i];
      i++;
      k++;
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, animationSpeed / 2));
    }
    
    while (j < rightArr.length) {
      arr[k] = rightArr[j];
      j++;
      k++;
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, animationSpeed / 2));
    }
  };

  // Calculate actual merge sort swaps for quiz
  const calculateMergeSortSwaps = (arr) => {
    let swapCount = 0;
    
    const mergeSortCount = (arr) => {
      if (arr.length <= 1) return { sorted: arr, swaps: 0 };
      
      const mid = Math.floor(arr.length / 2);
      const left = mergeSortCount(arr.slice(0, mid));
      const right = mergeSortCount(arr.slice(mid));
      
      const merged = mergeCount(left.sorted, right.sorted);
      
      return {
        sorted: merged.sorted,
        swaps: left.swaps + right.swaps + merged.swaps
      };
    };
    
    const mergeCount = (left, right) => {
      let result = [];
      let i = 0, j = 0;
      let swaps = 0;
      
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
          swaps += left.length - i;
        }
      }
      
      return {
        sorted: result.concat(left.slice(i)).concat(right.slice(j)),
        swaps: swaps
      };
    };
    
    const values = arr.map(item => item.value);
    const result = mergeSortCount(values);
    return result.swaps;
  };

  // Check user's guess for merge sort swaps
  const checkGuess = () => {
    const actualSwaps = calculateMergeSortSwaps(array);
    const userGuessNum = parseInt(userGuess);
    
    if (userGuessNum === actualSwaps) {
      setQuizResult('correct');
      setNotificationMessage(`🎉 Correct! Merge Sort would take ${actualSwaps} swaps.`);
    } else {
      setQuizResult('incorrect');
      setNotificationMessage(`❌ Incorrect! Merge Sort would take ${actualSwaps} swaps, not ${userGuessNum}.`);
    }
    
    setQuizCompleted(true);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  // Focus on input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Array visualization component
  const ArrayVisualization = () => {
    return (
      <div className="flex items-end justify-center h-64 mb-8 gap-1">
        {array.map((item) => (
          <motion.div
            key={item.id}
            className={`w-8 rounded-t-md flex items-center justify-center text-white font-bold text-xs
              ${item.isComparing ? 'bg-yellow-500' : 
                item.isSwapping ? 'bg-red-500' : 
                item.isSorted ? 'bg-green-500' : 
                'bg-blue-500'}`}
            style={{ height: `${item.value * 3}px` }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.value}
          </motion.div>
        ))}
      </div>
    );
  };

  // Algorithm controls
  const AlgorithmControls = () => {
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <motion.button
          className={`px-4 py-2 rounded-lg font-bold ${sorting ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
          whileHover={!sorting ? { scale: 1.05 } : {}}
          whileTap={!sorting ? { scale: 0.95 } : {}}
          onClick={bubbleSort}
          disabled={sorting}
        >
          Bubble Sort
        </motion.button>
        
        <motion.button
          className={`px-4 py-2 rounded-lg font-bold ${sorting ? 'bg-gray-500' : 'bg-purple-500 hover:bg-purple-600'} text-white`}
          whileHover={!sorting ? { scale: 1.05 } : {}}
          whileTap={!sorting ? { scale: 0.95 } : {}}
          onClick={insertionSort}
          disabled={sorting}
        >
          Insertion Sort
        </motion.button>
        
        <motion.button
          className={`px-4 py-2 rounded-lg font-bold ${sorting ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'} text-white`}
          whileHover={!sorting ? { scale: 1.05 } : {}}
          whileTap={!sorting ? { scale: 0.95 } : {}}
          onClick={mergeSort}
          disabled={sorting}
        >
          Merge Sort
        </motion.button>
        
        <motion.button
          className={`px-4 py-2 rounded-lg font-bold ${sorting ? 'bg-gray-500' : 'bg-red-500 hover:bg-red-600'} text-white`}
          whileHover={!sorting ? { scale: 1.05 } : {}}
          whileTap={!sorting ? { scale: 0.95 } : {}}
          onClick={() => generateArray()}
          disabled={sorting}
        >
          Generate New Array
        </motion.button>
      </div>
    );
  };

  // Stats display
  const StatsDisplay = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white/10 rounded-lg p-4 text-center">
          <p className="text-sm text-white/70">Algorithm</p>
          <p className="text-xl font-bold">{currentAlgorithm || 'None'}</p>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4 text-center">
          <p className="text-sm text-white/70">Swaps</p>
          <p className="text-xl font-bold">{swapCount}</p>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4 text-center">
          <p className="text-sm text-white/70">Comparisons</p>
          <p className="text-xl font-bold">{comparisonCount}</p>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4 text-center">
          <p className="text-sm text-white/70">Array Size</p>
          <p className="text-xl font-bold">{arraySize}</p>
        </div>
      </div>
    );
  };

  // Quiz component
  const QuizComponent = () => {
    return (
      <div className="bg-white/10 rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold mb-4 text-center">Merge Sort Challenge</h3>
        <p className="text-center mb-4">How many swaps will Merge Sort take to sort this array?</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="number"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter your guess"
            className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          
          <motion.button
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={checkGuess}
            disabled={!userGuess || quizCompleted}
          >
            Check Answer
          </motion.button>
        </div>
        
        {quizCompleted && (
          <motion.div 
            className={`mt-4 p-4 rounded-lg text-center ${quizResult === 'correct' ? 'bg-green-500/20' : 'bg-red-500/20'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className={quizResult === 'correct' ? 'text-green-300' : 'text-red-300'}>
              {quizResult === 'correct' ? '🎉 Correct! Well done!' : '❌ Try again! Generate a new array for another challenge.'}
            </p>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <SimpleLayout>
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white flex flex-col items-center justify-center p-4">
      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-4 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
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
        DSA Sorting Visualizer
      </motion.h1>
      <motion.p 
        className="text-xl mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Visualize sorting algorithms and test your knowledge!
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
              onKeyPress={(e) => e.key === 'Enter' && startGame('visualization')}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <motion.button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => startGame('visualization')}
            >
              Sorting Visualization
            </motion.button>
            
            <motion.button
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => startGame('quiz')}
            >
              Merge Sort Quiz
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Game Screen */}
      {gameStarted && (
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-4xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Player Info */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-lg">Player: <span className="font-bold">{playerName}</span></p>
              <p className="text-lg">Mode: <span className="font-bold">
                {gameMode === 'visualization' ? 'Sorting Visualization' : 'Merge Sort Quiz'}
              </span></p>
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

          {/* Array Visualization */}
          <ArrayVisualization />

          {/* Stats Display */}
          <StatsDisplay />

          {/* Controls */}
          {gameMode === 'visualization' && <AlgorithmControls />}
          {gameMode === 'quiz' && <QuizComponent />}

          {/* Speed Control */}
          <div className="mt-6">
            <label className="block text-center mb-2">Animation Speed: {animationSpeed}ms</label>
            <input
              type="range"
              min="50"
              max="1000"
              value={animationSpeed}
              onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
              className="w-full max-w-md mx-auto block"
              disabled={sorting}
            />
          </div>

          {/* Array Size Control */}
          <div className="mt-4">
            <label className="block text-center mb-2">Array Size: {arraySize}</label>
            <input
              type="range"
              min="5"
              max="20"
              value={arraySize}
              onChange={(e) => {
                setArraySize(parseInt(e.target.value));
                generateArray(parseInt(e.target.value));
              }}
              className="w-full max-w-md mx-auto block"
              disabled={sorting}
            />
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>Normal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span>Comparing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span>Swapping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>Sorted</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Footer */}
 
    </div>
    </SimpleLayout>
  );
};

export default SortingGame;