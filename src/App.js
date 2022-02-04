import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav class="sidenav">
        <div>
          <a href="#aboutme">About Me</a>
        </div>
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="main">
        <h1>Jimmy Kim</h1>

        <section>
          <div>
            <h2 id="aboutme">About Me:</h2>
          </div>
          <div>
            <p>
              I have an undergrad in Finance and wanted to pursue something that
              I was more passionate about. I enrolled in a bootcamp by Fullstack
              Academy to pursue a career change. The bootcamp was very engaging
              and exciting because there is always something new to learn and
              you're able to be creative with the projects you work on.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2 id="projects">Projects:</h2>
          </div>
          <h3>Project 4</h3>
          <div>
            <a href="https://strangersthingsjkim.netlify.app/">
              <img src="project4.png" className="project4"></img>
            </a>
            <p>
              <li>CSS</li>
              <li>HTML5</li>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>Restful API</li>
            </p>
          </div>
          <h3>Project 5</h3>
          <div>
            <a href="https://arcadejkim.netlify.app/index.html">
              <img src="project5.png" className="project5"></img>
            </a>
            <p>
              <li>CSS</li>
              <li>HTML5</li>
              <li>JavaScript</li>
            </p>
          </div>
          <div>
            <h3>Project 1</h3>
            <div>
              <a href="https://ijkim94.github.io/startup-of-the-year/">
                <img src="project1.png" className="project1"></img>
              </a>
              <p>
                <li>CSS</li>
                <li>HTML5</li>
              </p>
            </div>
            <h3>Project 2</h3>
            <div>
              <a href="https://reactacrt.netlify.app/">
                <img src="project2.png" className="project2"></img>
              </a>
              <p>
                <li>CSS</li>
                <li>HTML5</li>
                <li>jQuery</li>
                <li>Website API</li>
              </p>
            </div>
            <h3>Project 3</h3>
            <div>
              <a href="https://reactdraw.netlify.app/">
                <img src="project3.png" className="project3"></img>
              </a>
              <p>
                <li>CSS</li>
                <li>HTML5</li>
                <li>JavaScript</li>
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2 id="contact">Contact:</h2>
            <h3>Email</h3>
            <a>jmyyokim@gmail.com</a>
            <div>
              <h3>Socials</h3>
              <div className="icons">
                <a href="https://github.com/ijkim94">
                  <i class="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/jyoungkim/">
                  <i class="fa fa-linkedin-square"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
