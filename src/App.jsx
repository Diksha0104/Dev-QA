import logo from './logo.svg';
import product1 from './png logo.png';
import product2 from './everts logo (2).png';
import logo1 from './achievements1.png';
import logo2 from './achievements2.jpg';
import logo3 from './achievements3.png';
import award from './award.png';
import image from './image.jpeg';
import ApplicationFooter from './ApplicationFooter.jsx';
import './applicationfooter.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';




function App() {
  return (

    <div className="App">
      <div className="banner">
        <div className="content">
          <h1>About Us</h1>
          <p>Since 2015, DevQAExpert has been a leader in innovative testing solutions. We offer time-efficient and budget-friendly services that leverage the latest technologies for unmatched test coverage.<br></br>
          DevQAExpert is the innovative force behind QAEverest and FindMyLocator.<br></br> We are dedicated to empowering businesses with cutting-edge testing tools that streamline processes and ensure exceptional quality.
          </p>
          <p><h3>QAEverest and FindMyLocator</h3> represent our commitment to staying at the forefront of testing technology. </p>
        </div>
      </div>
      <h1>Our Products</h1>
      
      <div className="product">
        <div class="row">
            <div class="col-md-6 how-img">
              <div id="carouselFindMyLocator" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={award} alt="Logo 1" className="logo-image" />
                  </div>
                  <div class="carousel-item">
                    <img src={image} alt="Logo 1" className="logo-image" />
                  </div>
                  <div class="carousel-item">
                    <img src={logo3} alt="Logo 1" className="logo-image" />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselFindMyLocator" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselFindMyLocator" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
          </div>
            <div class="col-md-6 product-info">
              <h4>FindMyLocator</h4>
              <h4 class="subheading">Effortless Element Identification</h4>
              <p class="text-muted"> Locate unique elements within the Document Object Model (DOM) structure with just a single click. No more manual searching!</p>
            </div>
        </div>
        <div class="row">
          <div class="col-md-6 product-info">
            <h4>QAEverest</h4>
            <h4 class="subheading">GetLance makes it easy to connect with clients and begin doing great work.</h4>
            <p class="text-muted">This groundbreaking platform leverages AI to automate manual test case generation, enabling faster and more efficient testing cycles</p>
            </div>
            <div class="col-md-6 how-img">
            <div id="carouselQAEverest" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={award} alt="Logo 1" className="logo-image" />
                </div>
                <div class="carousel-item">
                  <img src={image} alt="Logo 1" className="logo-image" />
                </div>
                <div class="carousel-item">
                  <img src={logo3} alt="Logo 1" className="logo-image" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselQAEverest" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselQAEverest" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <h1>Our Achievements</h1>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={award} alt="Logo 1" className="achievement-image" />
          </div>
          <div class="carousel-item">
            <img src={image} alt="Logo 1" className="achievement-image" />
          </div>
          <div class="carousel-item">
            <img src={logo3} alt="Logo 1" className="achievement-image" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    
      <div className="Achievements">
        <div className="logo-item">
          <img src={award} alt="Logo 1" className="logo-image" />
          <p>Awarded “Most Trusted Software Testing Company in Central India”<br></br> by the National Quality Awards 2023
          </p>
        </div>
        <div className="logo-item">
          <img src={logo2} alt="Logo 2" className="logo-image" />
          <p>Recognised as 20 Most Promising Startups to Watch-2023 by Businessconnectindia
          </p>
        </div>
        <div className="logo-item">
          <img src={logo3} alt="Logo 3" className="logo-image" />
          <p> AI based Software Testing Device</p>
        </div>
      </div>
      {/* ApplicationFooter Component */}
      <ApplicationFooter />
    </div>
  );
}

export default App;
