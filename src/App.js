import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      
      <NavBar></NavBar>
      <Home />
      <Portfolio/>
      <Experience></Experience>
      <SocialLinks></SocialLinks>
      <Contact/>
     </div>
  );
}

export default App;

