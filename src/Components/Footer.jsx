import Email from '../assets/email-icon.png'
import LinkedIn from '../assets/linkedin-icon.png'
import GitHub from '../assets/github-icon.png';
import BackToTop from '../assets/back-to-top.png';

function Footer(props) {

    let url = props.gitHubUrl

    if(!url) {
        url = "https://github.com/ularson/";
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="footer">
            <div className="contact">
                <a className="contact-info" href="mailto:uffe.larson@gmail.com" target="_blank"><img src={Email} />Email</a>
                <a className="contact-info" href="https://www.linkedin.com/in/ulf-larsson-412080b8/" target="_blank"><img src={LinkedIn} />LinkedIn</a>
                <a className="contact-info" href={url} target="_blank"><img src={GitHub} />GitHub</a>
                <a className="contact-info" href="#" onClick={scrollToTop}><img src={BackToTop} />Back to top</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Grey Matters</p>
        </div>
    );

}

export default Footer