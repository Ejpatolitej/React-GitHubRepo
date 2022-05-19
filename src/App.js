import './App.css';
import {useState, useEffect} from "react";
import * as React from "react";
import {Routes, Route, Link} from 'react-router-dom';


function App() {
const [name, setName] = useState([]);
const [isLoading, setisLoading] = useState(true);
    useEffect(()=>{
      setTimeout(() => {
        fetch('https://api.github.com/users/Ejpatolitej/repos') //Api fetch
        .then(res => res.json())
        .then(data => {
            setName((prevname) =>[
                ...prevname,
                {
                    name: data[0].name,
                    description: data[0].description,
                    html_url: data[0].html_url
                },
                {
                    name: data[1].name,
                    description: data[1].description,
                    html_url: data[1].html_url
                },
                {
                    name: data[2].name,
                    description: data[2].description,
                    html_url: data[2].html_url
                },
            ]);
            setisLoading(false);
        });
      }, 500);
    },[]);

  return(
    <div>
    <nav class="navbar">
      <ul>
        <li>Home</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>3D Prints</li>
        <li>Twitch</li>
      </ul>
    </nav>
    <main>
      <div class="backgroundContainer">
        <h2>Här är länkar till mina github repos</h2>
        {isLoading && <div>Loading repositories...</div>}
        <div class="reposContainer">
          {name.map((names) =>(
                <>
                <h3>
                  {names.name}
                </h3>
                <p>{names.description}</p>
                <p><a href={names.html_url}>{names.html_url}</a></p>
                </>
          ))}
        </div>
      </div>
    </main>
    <section></section>
    <footer></footer>
    </div>
  );
}

export default App;
