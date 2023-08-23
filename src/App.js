import React, { useState } from "react";
import "./App.css";
import logo from "./img/loading.gif";
import Card from "./components/Card/Card";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const data = [
    "I can't wait to meet you in real life and take you out on dates.",
    "I like your voice, baby, and I won't get tired of hearing it.",
    "Worrying won't change anything, baby. If it's not within your control, just let it be, as it won't affect the outcome.",
    "You are the risk that I am willing to take.",
    "Your name is my favorite word.",
    "Your voice is my favorite sound.",
    "Your smile is my favorite sight.",
    "I love you baby you are amazing in every way.",
    "If I ever hurt you in any way, please don't hate me but my actions. I am trying my best not to hurt you, baby. I'm sorry.",
    "Remember that you are enough.",
    "I won't get tired of fixing our relationship.",
    "No matter what happens, I'm always here for you, and I've got you always.",
    "I don't see nobody but you.",
    "Ikaw ang aking pahinga sa mundong nakakapagod.",
    "If you ever feel uncomfortable about something, please tell me, baby, so I can reassure you about it.",
    "Paninindigan kita uWu.",
    "You're always my mind thats how much I care. JOCKIE PLAY LDR HIHI.",
    "You are the best thing, that's ever been mine.",
    "Promise me not to hide yourself when you're in pain, it's unfair that we laughed together but you cried alone.",
    "I'm so lucky to have you!",
    "I am so proud of you baby!",
    "Mwamwamwamwamwamwamwamwa", 
    "You deserve everything in this world baby and I'll work hard to give you everything.",
    "Let me love you the way you deserve to be loved",
    "Your existence alone means a lot to me.", 
    "Your my best support in DOTA hihi & mortal enemy in VALO HAHAHAHA", 
    "You're not bossy, you're my boss"
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [isSampleDataVisible, setIsSampleDataVisibile] = useState(true);
  const [isRandomDataVisible, setIsRandomDataVisible] = useState(false);
  const [isRandomData, setIsRandomData] = useState("");
  const [isButton1Visible, setIsButton1Visible] = useState(true);
  const [isButton2Visible, setIsButton2Visible] = useState(false);

  function randomizeData() {
    const number = Math.floor(Math.random() * data.length);
    setIsRandomData(data.slice(number, number + 1));
  }

  function button1() {
    const delayTimeout = setTimeout(() => {
      setIsLoading(true);
      setIsSampleDataVisibile(false);
      setIsButton1Visible(false);
    }, 100);

    const delayTimeout2 = setTimeout(() => {
      setIsLoading(false);
      setIsRandomDataVisible(true);
      randomizeData();
      setIsButton1Visible(false);
      setIsButton2Visible(true);
    }, 3000);

    return () => {
      clearTimeout(delayTimeout);
      clearTimeout(delayTimeout2);
    };
  }

  function button2() {
    const delayTimeout = setTimeout(() => {
      setIsLoading(true);
      setIsRandomDataVisible(false);
      setIsButton2Visible(false);
    }, 100);

    const delayTimeout2 = setTimeout(() => {
      setIsLoading(false);
      setIsRandomDataVisible(true);
      randomizeData();
      setIsButton2Visible(true);
    }, 3000);

    return () => {
      clearTimeout(delayTimeout);
      clearTimeout(delayTimeout2);
    };
  }

  return (
    <>
      <section className="d-flex justify-content-center align-items-center text-center">
        <div>
          {isSampleDataVisible && (
            <h2 className="mb-5">
              <Typewriter
                words={[
                  "Are you feeling lost today?",
                  "or feeling down?",
                  "maybe feeling anxious?",
                  "or probably upset at me?",
                  "Remember that I'm always here for you, loving you.",
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={80}
                delaySpeed={1500}
              />
            </h2>
          )}
          <p className="w-50 auto mb-5">
            {isRandomDataVisible && <Card> {isRandomData} </Card>}
            {isLoading && <img src={logo} />}
          </p>
          {isButton1Visible && (
            <button className="btn btn-outline" onClick={button1}>
              CLICK ME!
            </button>
          )}
          {isButton2Visible && (
            <button className="btn btn-outline" onClick={button2}>
              CLICK ME!
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
