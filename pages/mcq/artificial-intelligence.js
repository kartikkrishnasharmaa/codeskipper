import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";

const questionsData = [
  {
    id: 1,
    question: "What is the full form of AI?",
    options: [
      { label: "A", text: "Artificially Intelligent" },
      { label: "B", text: "Artificial Intelligence" },
      { label: "C", text: "Artificially Intelligence" },
      { label: "D", text: "Advanced Intelligence" },
    ],
    answer: "B. Artificial Intelligence",
  },
  {
    id: 2,
    question: "What is artificial intelligence?",
    options: [
      { label: "A", text: "A field that aims to make humans more intelligent." },
      { label: "B", text: "A field that aims to mine the data" },
      { label: "C", text: "A field that aims to make robots more intelligent." },
      { label: "D", text: "A field that aims to develop intelligent machines." },
    ],
    answer: "D. A field that aims to develop intelligent machines.",
  },
  {
    id: 3,
    question: "Who is the inventor of AI?",
    options: [
      { label: "A", text: "Alan Turing" },
      { label: "B", text: "Geoffrey Hinton" },
      { label: "C", text: "John McCarthy" },
      { label: "D", text: "Marvin Minsky" },
    ],
    answer: "C. John McCarthy",
  },
  {
    id: 4,
    question: "Which of the following is the branch of artificial intelligence?",
    options: [
      { label: "A", text: "Machine learning" },
      { label: "B", text: "Network security" },
      { label: "C", text: "Cyber security" },
      { label: "D", text: "Full stack development" },
    ],
    answer: "A. Machine learning",
  },
  {
    id: 5,
    question: "____ is the goal of AI.",
    options: [
      { label: "A", text: "To solve artificial problems" },
      { label: "B", text: "To solve real world problems" },
      { label: "C", text: "To extract scientific knowledge from the data" },
      { label: "D", text: "To explain various sort of intelligence" },
    ],
    answer: "D. To explain various sort of intelligence",
  },
  {
    id: 6,
    question: "Which of the following is an application of AI?",
    options: [
      { label: "A", text: "It helps to deploy application of cloud" },
      { label: "B", text: "Easy to create a website" },
      { label: "C", text: "Language understanding and problem solving (Text analytics and NLP)" },
      { label: "D", text: "All of the above" },
    ],
    answer: "C. Language understanding and problem solving (Text analytics and NLP)",
  },
  {
    id: 7,
    question: "Which of the following is a component of AI?",
    options: [
      { label: "A", text: "Learning" },
      { label: "B", text: "Reasoning" },
      { label: "C", text: "Designing" },
      { label: "D", text: "Puzzling" },
    ],
    answer: "A. Learning",
  },
  {
    id: 8,
    question: 'What is the function of an artificial intelligence "Agent"?',
    options: [
      { label: "A", text: "Mapping of goal sequences to actions" },
      { label: "B", text: "Mapping of environment states to actions" },
      { label: "C", text: "Mapping of precept sequences to actions" },
      { label: "D", text: "Work without the direct interference of the people" },
    ],
    answer: "C. Mapping of precept sequences to actions",
  },
  {
    id: 9,
    question: "Which of the following is not commonly used programming language of AI?",
    options: [
      { label: "A", text: "Perl" },
      { label: "B", text: "Java" },
      { label: "C", text: "Lisp" },
      { label: "D", text: "Prolog" },
    ],
    answer: "A. Perl",
  },
  {
    id: 10,
    question: "Which of the following is not an application of artificial intelligence?",
    options: [
      { label: "A", text: "Speech recognition" },
      { label: "B", text: "Face recognition" },
      { label: "C", text: "ChatGPT Model" },
      { label: "D", text: "DBMS" },
    ],
    answer: "D. DBMS",
  },
];

const ArtificialIntelligence = () => {
  return (
    <CourseLayout>
      <Head>
        <title>Artificial Intelligence Multiple Choice Questions | Code Skipper</title>
        <meta
          name="description"
          content="Explore a collection of multiple-choice questions (MCQs) on Artificial Intelligence, covering key concepts and features. Test your knowledge and deepen your understanding of Artificial Intelligence with our curated list."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Artificial Intelligence, AI, MCQs, Code Skipper, Python, Machine Learning, Data Science, Programming, Tutorials, Quiz, Exercises"
        />
        <link
          rel="canonical"
          href="https://CodeSkipper.in/mcq/artificial-intelligence"
        />
        <meta property="og:image" content="https://CodeSkipper.in/Images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta
          property="og:title"
          content="Artificial Intelligence Multiple Choice Questions | Code Skipper"
        />
        <meta
          property="og:description"
          content="Explore a collection of multiple-choice questions (MCQs) on Artificial Intelligence, covering key concepts and features. Test your knowledge and deepen your understanding of Artificial Intelligence with our curated list."
        />
      </Head>
      <section id="content-wrapper">
        <div className="relative xl:container">
          <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-black">
            Artificial Intelligence - Multiple Choice Questions
          </h1>

          {questionsData.map((q) => (
            <div key={q.id} className="space-y-6 py-8 text-base leading-7 text-black">
              <p className="font-bold">{`Question ${q.id}. ${q.question}`}</p>
              <ul className="space-y-4">
                {q.options.map((option) => (
                  <li key={option.label} className="flex items-center">
                    <div className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2">
                      <h1 className="mx-auto font-semibold bg-blue-100 rounded-full text-lg text-black text-center">
                        {option.label}
                      </h1>
                    </div>
                    <p className="ml-4">{option.text}</p>
                  </li>
                ))}
              </ul>
              <details className="open:duration-300">
                <summary className="bg-gray-200 text-black px-5 py-3 text-lg cursor-pointer">
                  Answer:
                </summary>
                <div className="px-5 py-3 border border-blue-700 text-sm">{q.answer}</div>
              </details>
            </div>
          ))}
        </div>
      </section>
    </CourseLayout>
  );
};

export default ArtificialIntelligence;
