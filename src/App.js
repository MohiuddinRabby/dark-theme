import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [darkMode, setDarkMode] = useState(setModeToLocal);
  function setModeToLocal() {
    //get item from local storage
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }
  useEffect(() => {
    //set item to local storage
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <p>NavBar</p>
      </nav>
      <main>
        <br />
        {/* <button onClick={() => setDarkMode(true)}>Dark Mode</button> */}
        {/* setDarkMode(true) doesn't back to light mode */}
        <button onClick={() => setDarkMode((changeMode) => !changeMode)}>
          {/* changeMode) => !changeMode -- this kind of func is known as updater pattern that switches to prev state */}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <br />
        <h2>{darkMode ? "Dark theme" : "Light theme"}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          blanditiis praesentium, provident commodi similique nobis ea
          recusandae repudiandae reprehenderit iure facere debitis ipsam qui
          suscipit cupiditate molestias eligendi. Vel quasi error, illum ab ad
          quo similique asperiores deserunt perferendis distinctio autem impedit
          aspernatur saepe earum pariatur ducimus expedita eligendi ipsum.
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam
          ducimus ratione, quae voluptas magni sed dignissimos illo corrupti
          cupiditate, ipsum sint harum nulla, mollitia quam ullam fugiat
          molestias minima! Cum facere deleniti ratione cupiditate accusamus
          cumque praesentium nihil numquam.
        </p>
        <hr />
      </main>
    </div>
  );
}

export default App;
