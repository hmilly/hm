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
      <header>
        <Nav />
      </header>
      <main>
        <Profile />
        <About />
        <Stack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
export default App;
