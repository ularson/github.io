import Header from '../Components/Header.jsx'
import Card from '../Components/Card.jsx'
import WebDevelopment from '../Components/WebDevelopment.jsx'
import Plugins from '../Components/Plugins.jsx'
import Music from '../Components/Music.jsx'
import Footer from '../Components/Footer.jsx'

import profilePic from '../assets/profile-pic.jpg'

function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="hero col text-center">
            <Card image={profilePic} title="Ulf Larsson" text="I am a system developer that codes websites and audio plugins. I also compose and produce music." />
          </div>
        </div>
      </div>
      <div className="container">
        <WebDevelopment />
        <Plugins />
        <Music />
        <Footer />
      </div>
    </>
  );
}

export default Home