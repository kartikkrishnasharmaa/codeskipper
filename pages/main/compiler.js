import React from "react";
import styled from "styled-components";
import SimpleLayout from "@/components/SimpleLayout";
import Link from "next/link";
import Head from "next/head";

const Card = () => {
  return (
    <SimpleLayout>
      <Head>
        <title>Online Code Compiler - HTML, JavaScript & Python</title>
        <meta
          name="description"
          content="Use our free online code compiler to write and test HTML, CSS, JavaScript, and Python code. No installation needed."
        />
        <meta
          name="keywords"
          content="online compiler, code editor, HTML editor, JavaScript IDE, Python online, free coding platform"
        />
      </Head>

      <StyledWrapper className="p-4 sm:p-6 md:p-10 pt-0 pb-[100px] m-2 sm:m-4 md:m-6 justify-center border-4 shadow-xl shadow-cyan-600 hover:shadow-indigo-700">
        <section className="text-center mt-14 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Free Online Code Compiler</h1>
          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-300">
            Instantly write and run code in your browser using our free online
            compiler. Supports HTML/CSS, JavaScript, and Python — no setup or
            installation required.
          </p>
        </section>

        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <Link href="/compiler/index.html">
            <div className="notification">
              <div className="notiglow" />
              <div className="notiborderglow" />
              <div className="notititle">HTML & CSS Editor</div>
              <div className="notibody">
                Test your frontend code with live preview using our web-based
                HTML/CSS editor.
              </div>
            </div>
          </Link>

          <Link href="/main/javascript">
            <div className="notification">
              <div className="notiglow" />
              <div className="notiborderglow" />
              <div className="notititle">JavaScript Compiler</div>
              <div className="notibody">
                Build dynamic scripts and test them instantly with our
                in-browser JavaScript environment.
              </div>
            </div>
          </Link>

          <Link href="/main/python">
            <div className="notification">
              <div className="notiglow" />
              <div className="notiborderglow" />
              <div className="notititle">Python Online IDE</div>
              <div className="notibody">
                Write, execute, and debug Python code in real-time from any
                device.
              </div>
            </div>
          </Link>
        </div>
      </StyledWrapper>
    </SimpleLayout>
  );
};

const StyledWrapper = styled.div`
  .notification {
    display: flex;
    flex-direction: column;
    isolation: isolate;
    position: relative;
    width: 100%;
    max-width: 18rem;
    min-width: 260px;
    background: #29292c;
    border-radius: 1rem;
    overflow: hidden;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    font-size: 16px;
    --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
    --color: #32a6ff;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .notification:before {
    position: absolute;
    content: "";
    inset: 0.0625rem;
    border-radius: 0.9375rem;
    background: #18181b;
    z-index: 2;
  }

  .notification:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;
    border-radius: 0.125rem;
    background: var(--gradient);
    transition: transform 300ms ease;
    z-index: 4;
  }

  .notification:hover:after {
    transform: translateX(0.15rem);
  }

  .notititle {
    color: var(--color);
    padding: 0.65rem 0.25rem 0.4rem 1.25rem;
    font-weight: 500;
    font-size: 1.25rem;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notititle {
    transform: translateX(0.15rem);
  }

  .notibody {
    color: #99999d;
    padding: 0 1.25rem 1rem;
    transition: transform 300ms ease;
    font-size: 0.95rem;
    z-index: 5;
  }

  .notification:hover .notibody {
    transform: translateX(0.25rem);
  }

  .notiglow,
  .notiborderglow {
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle closest-side at center, white, transparent);
    opacity: 0;
    transition: opacity 300ms ease;
  }

  .notiglow {
    z-index: 3;
  }

  .notiborderglow {
    z-index: 1;
  }

  .notification:hover .notiglow,
  .notification:hover .notiborderglow {
    opacity: 0.1;
  }

  @media (max-width: 640px) {
    .notititle {
      font-size: 1.1rem;
    }

    .notibody {
      font-size: 0.9rem;
      padding: 0 1rem 1rem;
    }
  }
`;

export default Card;
