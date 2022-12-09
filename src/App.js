import "./App.css";
import "./spotify-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Greetings from "./components/Greetings";
import HomePage from "./components/HomePage";
import SideBar from "./components/SideBar";
import TopNavBar from "./components/TopNavBar";
import PlayerSection from "./components/PlayerSection";

function App() {
  return (
    <div>
      <SideBar />
      <TopNavBar />
      <Greetings />
      <HomePage />
      <PlayerSection />
    </div>
  );
}

export default App;
