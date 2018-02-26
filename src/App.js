import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ut from './ut-arlington.png';
import Postmates from './Postmates.png';
import Aac from './Aac.jpg';
import Kw from './Kw.png';

class App extends Component {
  render() {
      return <div className="App">
          <header className="App-header">
              <h1 className="App-title">Kevin Gauer Resume</h1>
          </header>
          <body>
          <h1 class="Title-style">- Education & Experience -</h1>
          <div class="Flex-container">
              <div class="Box-content">
                  <h1 class="Box-content">University of Texas at Arlington</h1>
                  <img class="Img-format" src={Ut}/>
                  <br></br>
                  <p class="List-format">- Bachelor of Science in Physics</p>
              </div>
              <div class="Box-content">
                  <h1 class="Box-content">Keller Williams - Realtor</h1>
                  <img class="Img-format" src={Kw}/>
                  <br></br><br></br>
                  <p class="List-format">- Participate in active marketing initiatives, from cold calling to attending industry events</p>
                  <br></br>
                  <p class="List-format">- Organize and oversee open houses</p>
                  <br></br>
                  <p class="List-format">- Interview clients to determine their precise wants, needs, budgets and geographic limitations</p>
              </div>

              <div class="Box-content">
                  <h1 class="Box-content">Postmates - Courier</h1>
                  <img class="Img-format" src={Postmates}/>
                  <br></br>
                  <p class="List-format">- Delivered a variety of products to numerous residential and business addresses within the Dallas city limits</p>
                  <br></br>
                  <p class="List-format">- Maintained a 4.9 out of 5.0 star rating</p>
              </div>
              <div class="Box-content">
                  <h1 class="Box-content">Associated Air Center - Stress Engineer Intern</h1>
                  <img class="Img-format" src={Aac}/>
                  <br></br>
                  <p class="List-format">- Carried out a finite element analysis study designed to reduce deflections</p>
                  <br></br>
                  <p class="List-format">- Became familiarized with FEMAP through various projects</p>
                  <br></br>
                  <p class="List-format">- Assembled a comprehensive training manual for new stress engineer hires</p>
              </div>
          </div>
          </body>
      </div>;
  }
}

export default App;
