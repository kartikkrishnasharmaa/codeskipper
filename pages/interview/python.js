import { useState } from "react";
import Layout from '@/components/layouts/InterviewLayout';
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPython, FaCode, FaLaptop, FaRocket, FaDatabase, FaServer, FaBrain, FaChartLine } from 'react-icons/fa';

const PythonInterview = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Python Interview Questions Data - Extensive Collection
  const interviewQuestions = {
    basic: [
      {
        question: "What is Python and what are its key features?",
        answer: `Python is a high-level, interpreted programming language known for its simplicity and readability. Key features include:

• Easy to Learn: Clean syntax and English-like commands
• Interpreted: No compilation needed, runs directly
• Dynamically Typed: No need to declare variable types
• Object-Oriented: Supports classes and objects
• Extensive Libraries: Rich ecosystem for various tasks
• Cross-Platform: Runs on Windows, Linux, Mac
• Free and Open Source: No licensing costs
• Great Community: Strong support and documentation

Python is widely used in web development, data science, AI, automation, and more.`
      },
      {
        question: "Explain the difference between lists and tuples in Python.",
        answer: `Lists and tuples are both sequence types, but with key differences:

LISTS:
• Mutable - can be modified after creation
• Syntax: [1, 2, 3]
• Methods: append(), extend(), remove(), pop()
• Use when you need to modify the collection

TUPLES:
• Immutable - cannot be modified after creation
• Syntax: (1, 2, 3) or 1, 2, 3
• Faster than lists for iteration
• Can be used as dictionary keys
• Use for fixed data that shouldn't change

Example:
my_list = [1, 2, 3]    # Can modify
my_tuple = (1, 2, 3)   # Cannot modify`
      },
      {
        question: "What are Python dictionaries and how are they implemented?",
        answer: `Dictionaries are unordered collections of key-value pairs implemented as hash tables.

Characteristics:
• Keys must be hashable (immutable types)
• Values can be any data type
• Fast lookups - O(1) average case
• Syntax: {key1: value1, key2: value2}

Common Operations:
person = {"name": "John", "age": 30}
person["city"] = "New York"      # Add new key
age = person.get("age")          # Safe access
keys = person.keys()             # Get all keys
values = person.values()         # Get all values

Dictionaries are optimized for fast retrieval and are fundamental to Python.`
      },
      {
        question: "Explain Python's memory management and garbage collection.",
        answer: `Python manages memory automatically through:

REFERENCE COUNTING:
• Tracks how many references point to each object
• When count reaches zero, memory is freed immediately
• Handles most object cleanup

GARBAGE COLLECTION:
• Handles cyclic references (objects referencing each other)
• Uses generational garbage collection
• Three generations (0, 1, 2) based on object age
• Runs automatically when thresholds are exceeded

MEMORY ALLOCATION:
• Private heap space for Python objects
• Python memory manager handles allocation
• Built-in optimizations for small objects

This automatic management makes Python easier to use but less memory-efficient than C/C++.`
      },
      {
        question: "What are Python decorators and how do you create one?",
        answer: `Decorators are functions that modify the behavior of other functions. They're a powerful feature for metaprogramming.

Basic Decorator:
def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()  # Output: Before... Hello!... After...

Common Uses:
• Logging
• Timing functions
• Access control
• Caching
• Validation

Decorators help keep code DRY (Don't Repeat Yourself).`
      },
      {
        question: "Explain the difference between 'is' and '==' in Python.",
        answer: `'is' and '==' serve different purposes:

'is' (Identity Operator):
• Checks if two variables point to the same object in memory
• Compares memory addresses
• Returns True only if they are the exact same object

'==' (Equality Operator):
• Checks if two objects have the same value
• Can be customized using __eq__ method
• Returns True if values are equal

Example:
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)  # True - same values
print(a is b)  # False - different objects
print(a is c)  # True - same object

Use 'is' for None checks: if x is None:`
      },
      {
        question: "What are Python generators and when should you use them?",
        answer: `Generators are functions that return an iterator and can yield multiple values over time, pausing between each yield.

Creating Generators:
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

# Usage
for number in count_up_to(5):
    print(number)  # Prints 1, 2, 3, 4, 5

Advantages:
• Memory efficient - generates values on the fly
• Can represent infinite sequences
• Maintains state between calls
• Lazy evaluation - computes when needed

Use generators for:
• Large datasets that don't fit in memory
• Streaming data processing
• Infinite sequences
• Pipeline processing`
      },
      {
        question: "Explain Python's Global Interpreter Lock (GIL).",
        answer: `The GIL is a mutex that allows only one thread to execute Python bytecode at a time in a single process.

Key Points:
• Only affects CPU-bound tasks, not I/O-bound tasks
• Prevents true parallel execution of Python threads
• Simplifies memory management in CPython
• Can be bypassed using multiprocessing

Impact:
• Multiple threads can run concurrently for I/O tasks
• CPU-intensive tasks don't benefit from threading
• Use multiprocessing for CPU-bound parallel tasks

Alternatives:
• multiprocessing module
• asyncio for async I/O
• Jython, IronPython (no GIL)
• C extensions that release GIL`
      },
      {
        question: "What are Python context managers and the 'with' statement?",
        answer: `Context managers manage resources and ensure proper cleanup using the 'with' statement.

Using Built-in Context Managers:
with open('file.txt', 'r') as file:
    content = file.read()
# File automatically closed here

Creating Custom Context Managers:

Method 1 - Class-based:
class Timer:
    def __enter__(self):
        self.start = time.time()
        return self
    
    def __exit__(self, *args):
        self.end = time.time()
        print(f"Time: {self.end - self.start}")

Method 2 - Function-based:
from contextlib import contextmanager

@contextmanager
def timer():
    start = time.time()
    yield
    end = time.time()
    print(f"Time: {end - start}")

Use context managers for resource management like files, locks, and database connections.`
      },
      {
        question: "Explain Python's method resolution order (MRO).",
        answer: `MRO determines the order in which Python searches for methods in class hierarchies, especially with multiple inheritance.

Viewing MRO:
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass

print(D.__mro__)
# Output: (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)

C3 Linearization Algorithm:
• Depth-first, left-to-right
• Preserves monotonicity
• Prevents ambiguous method lookups

super() Function:
• Follows MRO to call parent class methods
• Essential for cooperative multiple inheritance

Understanding MRO helps avoid inheritance conflicts and design better class hierarchies.`
      }
    ],
    intermediate: [
      {
        question: "Explain Python's descriptor protocol and its uses.",
        answer: `Descriptors are objects that define how attribute access works. They implement __get__, __set__, or __delete__ methods.

Creating a Descriptor:
class PositiveNumber:
    def __init__(self, name):
        self.name = name
    
    def __get__(self, instance, owner):
        return instance.__dict__[self.name]
    
    def __set__(self, instance, value):
        if value < 0:
            raise ValueError("Must be positive")
        instance.__dict__[self.name] = value

class BankAccount:
    balance = PositiveNumber('balance')
    
    def __init__(self, balance):
        self.balance = balance

Common Uses:
• Properties (property decorator uses descriptors)
• Method binding
• Custom attribute access
• Validation and type checking

Descriptors are fundamental to how Python's object system works.`
      },
      {
        question: "What are metaclasses in Python and when would you use them?",
        answer: `Metaclasses are classes of classes that control class creation. They're the highest level of abstraction in Python.

Defining a Metaclass:
class Meta(type):
    def __new__(cls, name, bases, dct):
        # Modify class creation
        dct['created_by'] = 'Meta'
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=Meta):
    pass

print(MyClass.created_by)  # 'Meta'

Use Cases:
• API development
• ORM frameworks
• Automatic registration of classes
• Enforcing coding standards
• Adding class-level functionality

Metaclasses are powerful but should be used sparingly as they can make code complex.`
      },
      {
        question: "Explain Python's asyncio and asynchronous programming.",
        answer: `asyncio is Python's library for writing concurrent code using async/await syntax.

Key Concepts:
• Coroutines: async def functions
• Event Loop: Manages and executes coroutines
• Await: Pauses coroutine until result is ready
• Tasks: Wraps coroutines for concurrent execution

Example:
import asyncio

async def fetch_data(url):
    # Simulate API call
    await asyncio.sleep(1)
    return f"Data from {url}"

async def main():
    tasks = [
        fetch_data("url1"),
        fetch_data("url2"),
        fetch_data("url3")
    ]
    results = await asyncio.gather(*tasks)
    print(results)

asyncio.run(main())

Benefits:
• Efficient I/O-bound concurrency
• No thread overhead
• Clean, readable code
• Better than threading for I/O tasks`
      },
      {
        question: "What are Python's data classes and their advantages?",
        answer: `Data classes (introduced in Python 3.7) automatically generate special methods for classes primarily storing data.

Basic Data Class:
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    email: str = ""  # Default value

# Automatically gets __init__, __repr__, __eq__

person = Person("John", 30)
print(person)  # Person(name='John', age=30, email='')

Advantages:
• Less boilerplate code
• Automatic __init__, __repr__, __eq__
• Type hints support
• Immutable option (@dataclass(frozen=True))
• Post-init processing
• Comparison methods

Use data classes for classes that primarily store data with minimal logic.`
      },
      {
        question: "Explain Python's multiprocessing vs threading.",
        answer: `Both provide concurrency but solve different problems:

THREADING:
• Shares same memory space
• Limited by GIL for CPU tasks
• Good for I/O-bound tasks
• Lower overhead
• Risk of race conditions

MULTIPROCESSING:
• Separate memory spaces
• Bypasses GIL for CPU tasks
• Good for CPU-bound tasks
• Higher overhead
• Uses inter-process communication

Choosing Between Them:
• Use threading for I/O: web scraping, file operations
• Use multiprocessing for CPU: data processing, calculations
• Use asyncio for high-concurrency I/O

Example:
import multiprocessing
import threading

def cpu_task(x):
    return x * x

# Multiprocessing for CPU-bound
with multiprocessing.Pool() as pool:
    results = pool.map(cpu_task, range(10))`
      },
      {
        question: "What are Python's abstract base classes (ABCs)?",
        answer: `ABCs define interfaces that subclasses must implement. They're used to enforce class contracts.

Creating an ABC:
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

Benefits:
• Ensures subclasses implement required methods
• Clear interface definition
• Better code organization
• Runtime type checking

Use ABCs when you want to define a formal interface for multiple classes.`
      },
      {
        question: "Explain Python's memory views and their performance benefits.",
        answer: `Memory views allow efficient access to internal data of other objects without copying, crucial for high-performance computing.

Creating Memory Views:
import array

arr = array.array('i', [1, 2, 3, 4, 5])
mv = memoryview(arr)

# Access without copying
print(mv[0])     # 1
print(mv[1:3])   # <memory at...>

# Modify through view
mv[0] = 10
print(arr[0])    # 10

Benefits:
• Zero-copy slicing of large data
• Efficient buffer protocol access
• Shared memory between processes
• Interoperability with C extensions

Use Cases:
• Numerical computing
• Image processing
• Network programming
• Large dataset manipulation

Memory views are essential for performance-critical applications.`
      },
      {
        question: "What are Python's weak references and when to use them?",
        answer: `Weak references don't prevent garbage collection of the referenced object, unlike strong references.

Using Weak References:
import weakref

class Data:
    def __init__(self, value):
        self.value = value

obj = Data(100)
weak_ref = weakref.ref(obj)

print(weak_ref())  # <Data object at...>

# When obj is deleted
del obj
print(weak_ref())  # None

Use Cases:
• Caches that shouldn't prevent cleanup
• Circular reference breaking
• Observer patterns
• Large object management

WeakValueDictionary Example:
cache = weakref.WeakValueDictionary()

def get_data(key):
    if key not in cache:
        cache[key] = ExpensiveData(key)
    return cache[key]

Weak references help manage memory in complex object relationships.`
      },
      {
        question: "Explain Python's coroutines and generator-based concurrency.",
        answer: `Before asyncio, Python used generators for cooperative multitasking through coroutines.

Generator-based Coroutines:
def coroutine():
    while True:
        value = yield
        print(f"Received: {value}")

# Usage
coro = coroutine()
next(coro)        # Prime the coroutine
coro.send("Hello") # Received: Hello
coro.send("World") # Received: World

Enhanced Generator Coroutines (PEP 342):
@asyncio.coroutine  # Old decorator
def old_coroutine():
    yield from asyncio.sleep(1)
    return "Done"

Transition to Native Coroutines:
async def native_coroutine():
    await asyncio.sleep(1)
    return "Done"

Evolution:
• Generators (yield) → Enhanced generators (yield from) → Native coroutines (async/await)

Understanding this evolution helps with legacy code and deeper async understanding.`
      },
      {
        question: "What are Python's function annotations and type hints?",
        answer: `Type hints (PEP 484) allow optional type information in function signatures, improving code clarity and enabling static analysis.

Basic Type Hints:
def greet(name: str, age: int) -> str:
    return f"Hello {name}, you are {age} years old"

Complex Types:
from typing import List, Dict, Optional, Union

def process_data(
    numbers: List[int],
    config: Dict[str, Union[int, str]],
    timeout: Optional[float] = None
) -> bool:
    # Function implementation
    return True

Benefits:
• Better documentation
• IDE support for autocomplete and error detection
• Static type checking with mypy
• Clearer function contracts

Runtime Access:
print(greet.__annotations__)
# {'name': <class 'str'>, 'age': <class 'int'>, 'return': <class 'str'>}

Type hints are optional but recommended for larger projects.`
      }
    ],
    advanced: [
      {
        question: "Explain Python's metaclasses and their use in framework development.",
        answer: `Metaclasses enable deep customization of class creation, essential for framework development.

Advanced Metaclass Example:
class SingletonMeta(type):
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    def __init__(self):
        self.connection = "Database Connection"

# Both instances are the same
db1 = Database()
db2 = Database()
print(db1 is db2)  # True

Framework Use Cases:
• ORM field validation and mapping
• API route registration
• Plugin systems
• Configuration management
• Automatic method wrapping

Metaclasses provide the ultimate control over class behavior but increase complexity.`
      },
      {
        question: "What are Python's descriptor protocols and advanced usage patterns?",
        answer: `Descriptors control attribute access at a fundamental level, enabling advanced patterns.

Advanced Descriptor Pattern:
class ValidatedString:
    def __init__(self, min_length=0, max_length=100):
        self.min_length = min_length
        self.max_length = max_length
        self.storage_name = None
    
    def __set_name__(self, owner, name):
        self.storage_name = name
    
    def __get__(self, instance, owner):
        return instance.__dict__.get(self.storage_name, "")
    
    def __set__(self, instance, value):
        if not isinstance(value, str):
            raise TypeError("Must be string")
        if not (self.min_length <= len(value) <= self.max_length):
            raise ValueError(f"Length must be between {self.min_length} and {self.max_length}")
        instance.__dict__[self.storage_name] = value

class User:
    username = ValidatedString(3, 20)
    email = ValidatedString(5, 50)

Advanced Uses:
• Lazy loading of expensive attributes
• Caching computed properties
• Validation and type enforcement
• ORM field mappings
• Dynamic attribute creation`
      },
      {
        question: "Explain Python's C extension development and the Python/C API.",
        answer: `Python extensions in C can significantly improve performance for critical code sections.

Simple C Extension:
#include <Python.h>

static PyObject* hello_world(PyObject* self, PyObject* args) {
    return PyUnicode_FromString("Hello from C!");
}

static PyMethodDef methods[] = {
    {"hello_world", hello_world, METH_NOARGS, "Say hello"},
    {NULL, NULL, 0, NULL}
};

static struct PyModuleDef module = {
    PyModuleDef_HEAD_INIT,
    "mycext",
    "My C Extension",
    -1,
    methods
};

PyMODINIT_FUNC PyInit_mycext(void) {
    return PyModule_Create(&module);
}

Building with setuptools:
from setuptools import setup, Extension

module = Extension('mycext', sources=['mycext.c'])
setup(ext_modules=[module])

Use Cases:
• Performance-critical algorithms
• Integration with existing C libraries
• Hardware access
• Mathematical computations

Alternatives: Cython, ctypes, cffi for easier C integration.`
      },
      {
        question: "What are Python's GIL internals and strategies for true parallelism?",
        answer: `Understanding GIL internals helps design truly parallel Python applications.

GIL Internals:
• Mutex protecting Python interpreter
• Threads acquire/release GIL periodically
• Check interval (sys.setcheckinterval())
• I/O operations release GIL
• CPU-bound threads hold GIL

Strategies for Parallelism:

1. Multiprocessing:
   import multiprocessing as mp
   with mp.Pool() as pool:
       results = pool.map(heavy_computation, data)

2. Subinterpreters (Python 3.12+):
   # Experimental - true thread parallelism

3. C Extensions:
   // Release GIL in C code
   Py_BEGIN_ALLOW_THREADS
   // C code here
   Py_END_ALLOW_THREADS

4. External Processes:
   import subprocess
   subprocess.run(["python", "worker.py"])

5. Distributed Computing:
   • Dask, Ray, Celery
   • Multiple machines
   • Fault tolerance

Choose strategy based on task type and scale.`
      },
      {
        question: "Explain Python's memory allocation and optimization techniques.",
        answer: `Python's memory management can be optimized for performance-critical applications.

Memory Allocation Strategies:

1. Object Pools:
   • Small integer cache (-5 to 256)
   • String interning
   • Free lists for common objects

2. Custom Allocators:
   import ctypes
   
   class CustomAllocator:
       def __init__(self):
           self.memory = ctypes.create_string_buffer(1024)
           self.offset = 0
       
       def allocate(self, size):
           ptr = self.memory[self.offset:self.offset + size]
           self.offset += size
           return ptr

3. Memory Views for Zero-copy:
   import array
   data = array.array('d', [1.0, 2.0, 3.0])
   mv = memoryview(data)

4. __slots__ for Memory Efficiency:
   class Point:
       __slots__ = ['x', 'y']  # Prevents __dict__ creation
       def __init__(self, x, y):
           self.x = x
           self.y = y

5. Generators for Large Data:
   def read_large_file(filename):
       with open(filename) as f:
           for line in f:
               yield line

Optimization Techniques:
• Use built-in functions
• Local variable access
• List comprehensions
• Avoid dots in loops
• Precompute values`
      },
      {
        question: "What are Python's async/await internals and event loop implementation?",
        answer: `Understanding async/await internals helps debug and optimize asynchronous code.

Async/Await Internals:

Coroutine Objects:
async def my_coroutine():
    return 42

coro = my_coroutine()
print(type(coro))  # <class 'coroutine'>

Event Loop Components:
• Task scheduler
• I/O multiplexing (select, epoll, kqueue)
• Timer management
• Exception handling

Custom Event Loop (Simplified):
import selectors
import time

class SimpleEventLoop:
    def __init__(self):
        self.selector = selectors.DefaultSelector()
        self.tasks = []
        self.timers = []
    
    def create_task(self, coro):
        task = {'coro': coro, 'wait_until': 0}
        self.tasks.append(task)
    
    def call_later(self, delay, callback):
        self.timers.append({'time': time.time() + delay, 'callback': callback})
    
    def run_forever(self):
        while self.tasks or self.timers:
            # Process I/O
            # Process timers
            # Run ready tasks
            pass

Advanced Patterns:
• Custom schedulers
• Priority-based task execution
• Resource pooling
• Circuit breakers

Understanding these internals enables building robust async applications.`
      },
      {
        question: "Explain Python's import system and custom import hooks.",
        answer: `Python's import system is extensible, allowing custom module loading behavior.

Import Process:
1. sys.modules cache check
2. Finder search (sys.meta_path)
3. Loader execution
4. Module creation

Custom Import Hook:
import sys
import types

class VirtualModuleLoader:
    def find_module(self, fullname, path=None):
        if fullname == "mymodule":
            return self
        return None
    
    def load_module(self, fullname):
        if fullname in sys.modules:
            return sys.modules[fullname]
        
        module = types.ModuleType(fullname)
        module.__loader__ = self
        sys.modules[fullname] = module
        
        # Add module content
        module.hello = lambda: "Hello from virtual module!"
        
        return module

# Register loader
sys.meta_path.append(VirtualModuleLoader())

Use Cases:
• Dynamic module generation
• Remote module loading
• Encrypted module storage
• Module transformation
• Plugin systems

Advanced import hooks enable powerful runtime module manipulation.`
      },
      {
        question: "What are Python's performance profiling and optimization techniques?",
        answer: `Python provides robust tools for identifying and fixing performance bottlenecks.

Profiling Tools:

1. cProfile for Detailed Analysis:
   import cProfile
   cProfile.run('my_function()')

2. line_profiler for Line-by-line:
   # pip install line_profiler
   @profile
   def slow_function():
       total = 0
       for i in range(1000000):
           total += i
       return total

3. memory_profiler for Memory Usage:
   # pip install memory_profiler
   @profile
   def memory_intensive():
       data = [0] * 1000000
       return len(data)

Optimization Techniques:

1. Algorithm Optimization:
   • Choose right data structures
   • Reduce time complexity
   • Cache expensive computations

2. Built-in Functions:
   # Slow
   result = []
   for item in items:
       result.append(item * 2)
   
   # Fast
   result = list(map(lambda x: x * 2, items))

3. Local Variables:
   def fast_function():
       local_len = len  # Cache built-in
       for item in large_list:
           if local_len(item) > 10:
               process(item)

4. String Concatenation:
   # Slow for many operations
   s = ""
   for substring in list_of_strings:
       s += substring
   
   # Fast
   s = "".join(list_of_strings)

Use profiling to identify actual bottlenecks before optimizing.`
      },
      {
        question: "Explain Python's descriptor and property advanced patterns.",
        answer: `Advanced descriptor patterns enable sophisticated attribute management and validation.

Cached Property Pattern:
import functools

class cached_property:
    def __init__(self, func):
        self.func = func
        self.name = func.__name__
    
    def __get__(self, instance, owner):
        if instance is None:
            return self
        
        if self.name not in instance.__dict__:
            value = self.func(instance)
            instance.__dict__[self.name] = value
        
        return instance.__dict__[self.name]

class DataProcessor:
    @cached_property
    def processed_data(self):
        # Expensive computation
        return expensive_processing(self.raw_data)

Observable Property Pattern:
class ObservableProperty:
    def __init__(self, default=None):
        self.default = default
        self.observers = []
    
    def __set_name__(self, owner, name):
        self.name = name
    
    def __get__(self, instance, owner):
        return instance.__dict__.get(self.name, self.default)
    
    def __set__(self, instance, value):
        old_value = self.__get__(instance, None)
        instance.__dict__[self.name] = value
        
        for observer in self.observers:
            observer(instance, self.name, old_value, value)
    
    def add_observer(self, callback):
        self.observers.append(callback)

Advanced patterns enable reactive programming, caching, and complex validation logic.`
      },
      {
        question: "What are Python's metaprogramming techniques and their applications?",
        answer: `Metaprogramming involves writing code that manipulates code, enabling powerful abstractions.

Techniques and Applications:

1. Dynamic Class Creation:
   def create_class(class_name, bases, attributes):
       return type(class_name, bases, attributes)

   MyClass = create_class('MyClass', (object,), {'x': 42})

2. Function Decorators with Parameters:
   def repeat(times):
       def decorator(func):
           @functools.wraps(func)
           def wrapper(*args, **kwargs):
               for _ in range(times):
                   result = func(*args, **kwargs)
               return result
           return wrapper
       return decorator

   @repeat(3)
   def say_hello():
       print("Hello")

3. Context Manager Generators:
   from contextlib import contextmanager

   @contextmanager
   def database_transaction(db):
       try:
           db.begin()
           yield db
           db.commit()
       except Exception:
           db.rollback()
           raise

4. Class Decorators:
   def add_method(cls):
       def new_method(self):
           return "New method"
       cls.new_method = new_method
       return cls

   @add_method
   class MyClass:
       pass

Applications:
• Framework development
• API generation
• Testing tools
• Code generation
• DSL implementation

Metaprogramming enables creating elegant, expressive APIs at the cost of increased complexity.`
      }
    ]
  };

  const stats = [
    { number: "#1", text: "Most Popular Language" },
    { number: "29%", text: "Market Share" },
    { number: "1991", text: "First Released" },
    { number: "200K+", text: "Python Packages" }
  ];

  const difficultyInfo = {
    basic: { count: "10 questions", focus: "Fundamentals & Syntax" },
    intermediate: { count: "10 questions", focus: "OOP & Advanced Features" },
    advanced: { count: "10 questions", focus: "Internals & Performance" }
  };

  return (
    <Layout>
      <Head>
        <title>Python Interview Questions & Answers 2024 | Code Skipper</title>
        <meta
          name="description"
          content="Comprehensive collection of Python interview questions covering basic to advanced topics. Prepare for Python developer, data science, and backend engineering interviews."
        />
        <meta
          name="keywords"
          content="Python interview questions, Python programming interview, Python developer interview, data science Python questions, Django Flask interview, Python coding questions"
        />
        <meta property="og:title" content="Python Interview Questions & Answers 2024 | Code Skipper" />
        <meta
          property="og:description"
          content="Master Python interviews with 30+ comprehensive questions covering fundamentals, OOP, async programming, metaprogramming, and performance optimization."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://codeskipper.in/interview-questions/python" />
        <link rel="canonical" href="https://codeskipper.in/interview-questions/python" />
      </Head>

      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center py-12"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue-500 p-4 rounded-full shadow-lg">
                <FaPython className="text-6xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Python Interview Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master Python programming with comprehensive interview questions covering 
              fundamentals to advanced topics like metaprogramming, async, and performance optimization.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </motion.div>

          {/* Difficulty Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-green-50 rounded-lg">
                <FaCode className="text-3xl text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-700">Basic Level</h3>
                <p className="text-sm text-gray-600 mt-1">{difficultyInfo.basic.count}</p>
                <p className="text-xs text-gray-500">{difficultyInfo.basic.focus}</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <FaLaptop className="text-3xl text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold text-yellow-700">Intermediate</h3>
                <p className="text-sm text-gray-600 mt-1">{difficultyInfo.intermediate.count}</p>
                <p className="text-xs text-gray-500">{difficultyInfo.intermediate.focus}</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <FaRocket className="text-3xl text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold text-red-700">Advanced</h3>
                <p className="text-sm text-gray-600 mt-1">{difficultyInfo.advanced.count}</p>
                <p className="text-xs text-gray-500">{difficultyInfo.advanced.focus}</p>
              </div>
            </div>
          </motion.div>

          {/* Difficulty Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab("basic")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "basic"
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FaCode className="inline mr-2" />
                Basic Level ({interviewQuestions.basic.length})
              </button>
              <button
                onClick={() => setActiveTab("intermediate")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "intermediate"
                    ? "bg-yellow-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FaLaptop className="inline mr-2" />
                Intermediate ({interviewQuestions.intermediate.length})
              </button>
              <button
                onClick={() => setActiveTab("advanced")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "advanced"
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FaRocket className="inline mr-2" />
                Advanced ({interviewQuestions.advanced.length})
              </button>
            </div>

            {/* Questions Section */}
            <div className="space-y-6">
              {interviewQuestions[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">
                        {index + 1}. {item.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-blue-500 transform transition-transform duration-300 ${
                          openQuestion === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {openQuestion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-6 bg-gray-50">
                        <div className="prose prose-lg max-w-none">
                          <pre className="text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">
                            {item.answer}
                          </pre>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Python Domains Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Python Application Domains
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaServer className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Backend Development</h3>
                  <p className="text-gray-600">Django, Flask, FastAPI for web services and APIs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaBrain className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Data Science & AI</h3>
                  <p className="text-gray-600">Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaChartLine className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Automation & Scripting</h3>
                  <p className="text-gray-600">System administration, testing, and task automation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaDatabase className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">DevOps & Data Engineering</h3>
                  <p className="text-gray-600">Data pipelines, cloud automation, and infrastructure</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center py-8"
          >
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Continue Your Python Journey</h2>
              <p className="mb-6 opacity-90">
                Master Python with our comprehensive learning resources and practice platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/interview">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300">
                    All Technologies
                  </button>
                </Link>
                <Link href="/interview/javascript">
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition duration-300">
                    Next: JavaScript Questions →
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PythonInterview;