import React, { useEffect, useMemo, useState } from 'react';
import "./App.css";
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earnedAmount, setEarnedAmount] = useState("₹0");
  const [userName, setUserName] = useState(null);

  const data = [
    {
      id: 1,
      question: "What is React?",
      answers: [
        { text: "A programming language", correct: false },
        { text: "A JavaScript library for building user interfaces", correct: true },
        { text: "A database management tool", correct: false },
        { text: "A web server", correct: false },
      ],
    },
    {
      id: 2,
      question: "Who developed React?",
      answers: [
        { text: "Google", correct: false },
        { text: "Facebook", correct: true },
        { text: "Twitter", correct: false },
        { text: "Microsoft", correct: false },
      ],
    },
    {
      id: 3,
      question: "What is JSX?",
      answers: [
        { text: "A programming language", correct: false },
        { text: "A syntax extension for JavaScript", correct: true },
        { text: "A library for animations", correct: false },
        { text: "A server-side rendering tool", correct: false },
      ],
    },
    {
      id: 4,
      question: "What is the virtual DOM?",
      answers: [
        { text: "A copy of the real DOM that is used for testing", correct: false },
        { text: "A lightweight representation of the real DOM", correct: true },
        { text: "A server-side DOM renderer", correct: false },
        { text: "A special version of the DOM for mobile devices", correct: false },
      ],
    },
    {
      id: 5,
      question: "What are React components?",
      answers: [
        { text: "Reusable pieces of UI", correct: true },
        { text: "A type of database in React", correct: false },
        { text: "An API in React", correct: false },
        { text: "A CSS framework", correct: false },
      ],
    },
    {
      id: 6,
      question: "What are props in React?",
      answers: [
        { text: "A way to manage state in components", correct: false },
        { text: "Inputs to components for dynamic data", correct: true },
        { text: "A library for routing", correct: false },
        { text: "A built-in method for DOM manipulation", correct: false },
      ],
    },
    {
      id: 7,
      question: "What is state in React?",
      answers: [
        { text: "A database for React components", correct: false },
        { text: "A way to manage dynamic data within a component", correct: true },
        { text: "An event handler in React", correct: false },
        { text: "A lifecycle method", correct: false },
      ],
    },
    {
      id: 8,
      question: "How can you handle events in React?",
      answers: [
        { text: "By using inline JavaScript", correct: false },
        { text: "By using DOM event handlers", correct: false },
        { text: "By passing a function as a prop", correct: true },
        { text: "React does not support event handling", correct: false },
      ],
    },
    {
      id: 9,
      question: "What is a React fragment?",
      answers: [
        { text: "A lightweight way to group multiple elements", correct: true },
        { text: "A component for animations", correct: false },
        { text: "A tool for testing React components", correct: false },
        { text: "A built-in debugging tool", correct: false },
      ],
    },
    {
      id: 10,
      question: "What is the use of useState hook?",
      answers: [
        { text: "To manage the DOM directly", correct: false },
        { text: "To add state to functional components", correct: true },
        { text: "To handle routing in React", correct: false },
        { text: "To make API calls", correct: false },
      ],
    },
    {
      id: 11,
      question: "Which command is used to create a new React app?",
      answers: [
        { text: "npm install react", correct: false },
        { text: "npx create-react-app app-name", correct: true },
        { text: "react-create-app app-name", correct: false },
        { text: "npx install react", correct: false },
      ],
    },
    {
      id: 12,
      question: "What is the purpose of React Router?",
      answers: [
        { text: "To handle API requests", correct: false },
        { text: "To manage navigation in a React application", correct: true },
        { text: "To provide animations", correct: false },
        { text: "To optimize performance", correct: false },
      ],
    },
    {
      id: 13,
      question: "What is a higher-order component (HOC) in React?",
      answers: [
        { text: "A component that renders higher-level UI", correct: false },
        { text: "A function that takes a component and returns a new component", correct: true },
        { text: "A built-in React component", correct: false },
        { text: "A debugging tool", correct: false },
      ],
    },
    {
      id: 14,
      question: "What is the default port for running a React app?",
      answers: [
        { text: "3000", correct: true },
        { text: "8080", correct: false },
        { text: "5000", correct: false },
        { text: "4000", correct: false },
      ],
    },
    {
      id: 15,
      question: "How do you pass data from a parent to a child component in React?",
      answers: [
        { text: "Using state", correct: false },
        { text: "Using props", correct: true },
        { text: "Using context", correct: false },
        { text: "Using lifecycle methods", correct: false },
      ],
    },
  ];
  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "₹1000" },
      { id: 2, amount: "₹2000" },
      { id: 3, amount: "₹3000" },
      { id: 4, amount: "₹5000" },
      { id: 5, amount: "₹10000" },
      { id: 6, amount: "₹20000" },
      { id: 7, amount: "₹40000" },
      { id: 8, amount: "₹8000" },
      { id: 9, amount: "₹16000" },
      { id: 10, amount: "₹32000" },
      { id: 11, amount: "₹64000" },
      { id: 12, amount: "₹125000" },
      { id: 13, amount: "₹250000" },
      { id: 14, amount: "₹500000" },
      { id: 15, amount: "₹1000000" },
    ].reverse(),
    [])

  useEffect(() => {
    questionNumber > 1 && setEarnedAmount(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])

  return (
    <div className='app'>
      {userName ? (
        <>
          <div className="main">
            {stop ? (
              <div className='end-container'><p className='user'>{userName}</p><h1 className='endtext'>You earned : {earnedAmount}</h1></div>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className='moneyList'>
              {moneyPyramid.map((m) => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className='moneyListItemNumber'>{m.id}</span>
                  <span className='moneyListItemAmount'>{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}

    </div>
  )
}

export default App
