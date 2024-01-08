import React, { useState, useEffect, useCallback } from "react";
import "./Title.scss";

const fonts = [
  "'Cloister Black', sans-serif",
  "'ARB 85 Poster Script JAN-39', sans-serif",
  "Glass Antiqua",
  "Special Elite",
  "'Old English Five', sans-serif",
  "'Permanent Marker'",
  "'USAngel', sans-serif",
  "'Splash'",
];

const letters1 = ["S", "P", "I", "T"];
const letters2 = ["H", "A", "C", "K", "A", "T", "H", "O", "N"];
const letters3 = ["2", "0", "2", "4"];


const Title = () => {
  const getRandomFont = useCallback(
    () => fonts[Math.floor(Math.random() * fonts.length)],
    []
  );

  const [letterFonts, setLetterFonts] = useState(() =>
    letters2.map(() => getRandomFont())
  );

  useEffect(() => {
    const changeFontsInterval = setInterval(() => {
      setLetterFonts(() => letters2.map(() => getRandomFont()));
    }, 400);

    const changeFontsTimeout = setTimeout(() => {
      clearInterval(changeFontsInterval);
      setLetterFonts(() => letters2.map(() => fonts[2])); // Set a constant font
    }, 10000);

    return () => {
      clearInterval(changeFontsInterval);
      clearTimeout(changeFontsTimeout);
    };
  }, [getRandomFont]);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Glass+Antiqua&family=Permanent+Marker&family=Special+Elite&family=Splash&display=swap');
          @import url('https://fonts.cdnfonts.com/css/cloister-black');
          @import url('https://fonts.cdnfonts.com/css/old-english-five');
          @import url('https://fonts.cdnfonts.com/css/usangel');
          @import url('https://fonts.cdnfonts.com/css/arb-85-poster-script-jan-39');
        `}
      </style>
      <div className="container">
        <h3 className="title spit">
          {letters1.map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{ fontFamily: letterFonts[index] }}
            >
              {letter}
            </span>
          ))}
        </h3>
        <br />
        <h2 className="title hackathon">
          {letters2.map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{ fontFamily: letterFonts[index] }}
            >
              {letter}
            </span>
          ))}
        </h2>
        <br />
        <h3 className="title year">
          {letters3.map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{ fontFamily: letterFonts[index] }}
            >
              {letter}
            </span>
          ))}
        </h3>
      </div>
    </>
  );
};

export default Title;
