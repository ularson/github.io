import Header from '../Components/Header.jsx';
import Hero from '../Components/Hero.jsx';
import Product from '../Components/Product.jsx';
import Footer from '../Components/Footer.jsx'

import gmeq1 from '../assets/gm-eq-1.png';
import github from '../assets/github-icon.png';

function GMEQ1 () {
    return (
        <>
        <Header />
        <Hero />
        <div className="plugin container">
          <div className="row mb-5">
            <div className="col">
              <h2>GM EQ 1</h2>
              <p>A 5 band equalizer based on Matcats SimpleEQ project.</p>
              <img className="plugin-image" src={gmeq1} />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col"> 
              <p>Built with Juce and C++ this audio plugin features 5 bands with a graphical response curve and the option to enable or disable any bands. The lowcut and high cut filters are slope filters and the three middle filters are peak filters. The slope filters have a frequency knob with a range of 20 to 20000 hertz and a gain knob with a range of 12 to 48 decibels. The slope filters have a frequency knob with a range of 20 to 20000 hertz, a gain knob with the range of -24 to 24 decibels and a quality knob with a range of 0.1 to 10. The quality knob sets the with of the cut or boost.
              </p>
              <p>
                If you want to code it yourself I highly recommend you watch matcats excellent tutorial on youtube:<br />
                {/* <a href="https://www.youtube.com/watch?v=ZKmFZpJEZ3k&t=17s">PFM::SimpleEQ - Free Course!</a> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZKmFZpJEZ3k?si=5gDV_DMzyqd87VyC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </p>
              <p>
                You can find matcats finished code here:<br />
                <a href="https://github.com/matkatmusic/SimpleEQ">SimpleEQ</a>
              </p>
              <p>
                You can download my code or the finished plugin on my github page below.<br />
                The finished plugin is found in the dist.zip file.<br />
                You can choose between standalone, VST3 or Audio Component.
              </p>
              <p>
                Happy coding!
              </p>
              </div>
          </div>
          <Footer gitHubUrl={"https://github.com/ularson/GMEQ1"} />
        </div>
      </>
    );
}

export default GMEQ1