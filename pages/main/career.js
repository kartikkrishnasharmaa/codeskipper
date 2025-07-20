import Image from "next/image";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";

const career = () => {
  return (
    <SimpleLayout>
      <div>
        <Head>
          <title>Career Page | Unstop Computer</title>
          <meta
            name="description"
            content="We are creating a new way of learning.A new way of understanding. And we're doing it together."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta charSet="UTF-8" />
          <meta name="robots" content="index, follow" />
          <meta
            name="Keywords"
            content="HTML,Unstop Computer.in,UnstopComputers, Unstop Computer, UnstopComputers.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"
          />
          <link
            rel="canonical"
            href="https://unstopcomputer.tech/main/career"
          />
          <meta
            property="og:image"
            content="https://unstopcomputer.tech/Images/logo.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="150" />
          <meta property="og:image:height" content="150" />
          <meta property="og:title" content="Career Page | Unstop Computer" />
          <meta
            property="og:description"
            content="Are you looking for a way to reach thousands of coding enthusiasts who are eager to learn new skills and technologies."
          />
        </Head>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto px-5 py-12 flex md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-700">
                Join Our Team
              </h1>
              <p className="mb-8 leading-relaxed">
                We are creating a new way of learning.A new way of
                understanding. And we're doing it together. So if you're ready
                for a challenge, we're ready for you.{" "}
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded"
                alt="hero"
                width={250}
                height={200}
                src="/Images/tutorial.png"
              />
            </div>
          </div>
        </section>
        <h1 className="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-blue-700">
          Our Five Step Recruit Process
        </h1>
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 h-full border"
              style={{ left: "50 %" }}
            ></div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold  text-lg text-white">1</h1>
              </div>
              <div className="order-1 bg-blue-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">Review</h3>
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  Applicants are reviewed to ensure a good fit.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">
                  👋 Initial Interview
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  We want to get to know you better!
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  Mini Project
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  A project for the team you’re applying for is distributed.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
              </div>
              <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">
                  Final Interview
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  This Final interview is conducted with team lead.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  Career Launch
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Blast off into the future of productivity and unlimited
                  possibility !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default career;
