import Header from '../Components/Header.jsx';
import Hero from '../Components/Hero.jsx';
import ContactForm from '../Components/ContactForm.jsx';
import Footer from '../Components/Footer.jsx'

function Contact () {

    return (
        <>
        <Header />
        <Hero />
        <div className="contact container">
            <div className="row mb-3">
                <div className="col">
                    <h2>Contact</h2>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <ContactForm />
                </div>
            </div>
        <Footer />
        </div>
      </>
    );
}

export default Contact