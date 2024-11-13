// src/App.jsx
import "./App.css";
import "./index.css";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";

function App() {
  return (
    <>
      <div className="App">
        <div className="upper-icons">
          <img src={logo} alt="discord-logo" className="logo" />

          <img src={menu} alt="menu" className="card" />
        </div>

        <div className="text">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place thar makes ot easy to talk every day
            and hang out more often.
          </p>
        </div>

        <div className="button-section">
          <button className="button1">Download for Mac</button>

          <br />     

          <button className="button2">Open Discord in your browser</button>
        </div>

        <div className="background">
          <img src={background} alt="background" />
        </div>
      </div>
    </>
  );
}

export default App;
