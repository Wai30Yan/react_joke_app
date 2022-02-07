import React, { useState, useEffect } from "react";
import "./App.css";
import { getJoke } from "./api";
import Joke from "./components/Joke";
import JokeForm from "./components/JokeForm";

function App() {
  const [joke, setJoke] = useState({});

  const [category, setCategory] = useState("Any");
  const [type, setType] = useState("Single");

  const [flags, setFlages] = useState({
    nsfw: true,
    religious: true,
    political: true,
    explicit: true,
    racist: true,
    sexist: true,
  });

  const [custom, setCustom] = useState({
    Programming: true,
    Dark: false,
    Pun: false,
    Spooky: false,
    Misc: false,
  });

  useEffect(() => {
    handleJoke()   
  }, [])
  

  const handleJoke = () => {
    getJoke(custom, type, category, flags).then((data) => {
      setJoke(data)
    })
  }

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const typeHandler = (e) => {
    setType(e.target.value);
  };

  const customHandler = (e) => {
    setCustom((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.checked };
    });
  };

  const flagsHandler = (e) => {
    setFlages((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.checked };
    });
  };

  return (
    <>
      <div className="App">
        <div className="joke-form">

          <JokeForm
            className='joke-form'
            category={category}
            type={type}
            flags={flags}
            custom={custom}
            categoryHandler={categoryHandler}
            typeHandler={typeHandler}
            customHandler={customHandler}
            flagsHandler={flagsHandler}
            handleJoke={handleJoke}
          />
        </div>
        <div className="joke">
          <Joke  joke={joke} />
        </div>
      </div>
      <div style={{ padding: '50px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
        <p style={{ fontSize: '32px', margin: 'auto' }} >The joke app use JOKE API to fetch jokes. For responsiveness of the app, the joke form and joke content are rendered as column when the screen width is lower than 820px.</p>
      </div>
      
    </>
  );
}

export default App;
