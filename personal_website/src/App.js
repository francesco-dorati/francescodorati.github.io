import './App.css';
import AboutMe from './AboutMe.js';
import NavBar from './NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main_page">
        <AboutMe />
        <div>

          <div className="about_me">
            <h2>About Me</h2>
            <p></p>
          </div>

          <div className="about_me">
            <h2>Skills</h2>
            <p></p>
          </div>


          <div className="best_projects">
            <div className="header">
              <h2>Best Projects:</h2>
              <a>Show More</a>
            </div>

            {/* <ProjectOverview id=""/>
            <ProjectOverview id=""/>
            <ProjectOverview id=""/>
            <ProjectOverview id=""/>
            <ProjectOverview id=""/> */}
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default App;
