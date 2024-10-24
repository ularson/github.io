import Header from '../Components/Header.jsx';
import Hero from '../Components/Hero.jsx';
import Footer from '../Components/Footer.jsx'

import gmcomp1 from '../assets/gm-comp-1.png';
import github from '../assets/github-icon.png';

function GMEQ1 () {
  return (
      <>
      <Header />
      <Hero />
      <div className="plugin container">
        <div className="row mb-5">
          <div className="col">
            <h2>GM Comp 1</h2>
            <p>A 3 multiband compressor based on Matcats SimpleMultiBandComp project.</p>
            <img className="plugin-image" src={gmcomp1} />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <p>Built with Juce and C++ this audio plugin features 3 bands with a graphical response curve and the option to enable or disable any bands.<br />
            The first section features input and output trim knobs and knobs for the low-mid and mid-hi crossover frequencies.<br />
            The second section contains knobs for attack, release, threshold and ratio. On the left side there are buttons for selecting the low, mid or high band. The right side contains buttons for disable, mute and solo. <br />
            There are also buttons at the top for disabling the entire plugin and for disabling the frequency response curve.
            </p>
            <p>
              If you want to code it yourself I highly recommend you watch matcats excellent tutorial on youtube:<br />
              <iframe width="560" height="315" src="https://www.youtube.com/embed/H1IvfOfBsVQ?si=Bz0HChZXcJSBDW1C" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </p>
            <p>
              You can find matcats finished code here:<br />
              <a href="https://github.com/matkatmusic/SimpleMultiBandComp">SimpleMultiBandComp</a>
            </p>
            <p>
              You can download my code or the finished plugin on my github page below.<br />
              The finished plugin is found in the dist-zip file. <br />
              You can choose between standalone, VST3 or Audio Component.
            </p>
            <p>
              Happy coding!
            </p>      
          </div>
        </div>
        <Footer gitHubUrl={"https://github.com/ularson/GMComp1"} />
      </div>
    </>
  );
}

export default GMEQ1