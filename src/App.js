import "./app.scss";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-children">
        <Profile />
        <About />
        <Stack />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
export default App;
