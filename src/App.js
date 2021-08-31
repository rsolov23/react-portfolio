import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import backgroundVideo from "./assets/images/video.mp4";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <Router>
      <ChakraProvider>
        <div class="video">
          <video autoPlay loop muted id="video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div>
            <Header />
            <div>
              <Route exact path="/" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/resume" component={Resume} />
            </div>
            <Footer />
          </div>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
