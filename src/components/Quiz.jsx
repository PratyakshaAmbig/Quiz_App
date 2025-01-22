import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import paly from "../assets/play.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";

const Quiz = ({ data, setStop, questionNumber, setQuestionNumber}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(paly);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(()=>{
    letsPlay()
  },[letsPlay])

  useEffect(() => {
    setQuestion(data[questionNumber - 1])
  }, [data, questionNumber])

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration)
  }

  const handleClick = (ans) => {
    setSelectedAnswer(ans)
    setClassName("answer active")
    delay(3000, () => setClassName(ans.correct ? "answer correct" : "answer wrong"))
    delay(5000, () => {
      if (ans.correct) {
        correctAnswer();
        delay(1000, ()=>{
          setQuestionNumber((prev) => prev + 1)
        setSelectedAnswer(null)
        })
        
      }else{
        wrongAnswer();
        delay(1000, ()=>{
          setStop(true)
        })
      }
    }

    )

  }
   if(questionNumber>15){
    setStop(true);
    return null
   }
  return (
    <div className='trivia'>
      <div className="question"> {question?.question}</div>
      <div className="answers">
        {question?.answers.map((ans) => (
          <div className={selectedAnswer === ans ? className : "answer"} onClick={() => handleClick(ans)}>{ans.text}</div>
        ))}
      </div>
    </div>
  )
}

export default Quiz;
