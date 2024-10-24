import Header from '../Components/Header.jsx';
import Hero from '../Components/Hero.jsx';
import Background from  '../Components/Background.jsx';
import Footer from '../Components/Footer.jsx'


function About () {
    return (
        <>
        <Header />
        <Hero />
        <div className="about container">
          <div className="row mb-5">
            <div className="col">
                <Background />
            </div>
        </div>
        <Footer />
        </div>
      </>
    );
}

export default About