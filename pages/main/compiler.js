import React from "react";
import styled from "styled-components";
import SimpleLayout from "@/components/SimpleLayout";
import Link from "next/link";

const Card = () => {
  return (
    <SimpleLayout>
      <h1 className="text-center mt-14 text-3xl font-bold mb-6">
        Online Compiler
      </h1>
      <StyledWrapper className="p-10 pt-14 pb-[100px] m-6 flex gap-6 justify-center border-4 shadow-xl shadow-cyan-600 hover:shadow-indigo-700">
        
        <Link href="/compiler/index.html">
          <div className="notification">
            <div className="notiglow" />
            <div className="notiborderglow" />
            <div className="notititle">HTML CSS</div>
            <div className="notibody">Contribute to Open Source UI Elements</div>
          </div>
        </Link>

        <Link href="/main/javascript">
          <div className="notification">
            <div className="notiglow" />
            <div className="notiborderglow" />
            <div className="notititle">JAVASCRIPT</div>
            <div className="notibody">Contribute to Open Source UI Elements</div>
          </div>
        </Link>

        <Link href="/main/python">
          <div className="notification">
            <div className="notiglow" />
            <div className="notiborderglow" />
            <div className="notititle">PYTHON</div>
            <div className="notibody">Contribute to Open Source UI Elements</div>
          </div>
        </Link>

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
    width: 18rem;
    height: 8rem;
    background: #29292c;
    border-radius: 1rem;
    overflow: hidden;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    font-size: 16px;
    --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
    --color: #32a6ff;
    cursor: pointer;
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
    font-size: 1.5rem;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notititle {
    transform: translateX(0.15rem);
  }

  .notibody {
    color: #99999d;
    padding: 0 2.25rem;
    transition: transform 300ms ease;
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

  .notification:hover .notiglow {
    opacity: 0.1;
  }

  .notification:hover .notiborderglow {
    opacity: 0.1;
  }
`;

export default Card;
