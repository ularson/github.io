import Brain from '../assets/brain-icon.jpg';
import Email from '../assets/email-icon.png'
import LinkedIn from '../assets/linkedin-icon.png'
import GitHub from '../assets/github-icon.png';

function Header(){
 return (
    <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a href="/"><h2 className="main-title"><img className="logo" src={Brain} /> Grey Matters</h2></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Web development
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.alecta.se" target="_blank">Alecta - Home</a></li>
                                <li><a className="dropdown-item" href="https://www.alecta.se/om-alecta/finansiell-information/arsredovisningar/ars-och-hallbarhetsredovisning-2023/" target="_blank">Alecta - Årsredovisning</a></li>
                                <li><a className="dropdown-item" href="https://www.alectafastigheter.se/" target="_blank">Alectafastigheter - Home</a></li>
                                <li><a className="dropdown-item" href="https://www.alectafastigheter.se/lediga-lokaler/klarabergsviadukten-70-d7-1096/" target="_blank">Alectafastigheter - Lediga lokaler</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Plugins
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/gmeq1">GM EQ 1</a></li>
                                <li><a className="dropdown-item" href="/gmcomp1">GM Comp 1</a></li>
                                <li><a className="dropdown-item" href="/gmsq1">GM SQ 1</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Videos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=avPhDfTGbB8" target="_blank" rel="nofollow, noindex">Rednex - Hold me for a while</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=7lHTx3cNR4U" target="_blank" rel="nofollow, noindex">Rednex - Hold me for a while - The midnight sun remix</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=qJcs-AYU7-k" target="_blank" rel="nofollow, noindex">Rednex - The chase</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=EPEck5P70Fc" target="_blank" rel="nofollow, noindex">Rednex - Bottleneck Bob</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=m45X_vz9Log" target="_blank" rel="nofollow, noindex">Rednex - Love me or leave me</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=9ONLU5vUf-U" target="_blank" rel="nofollow, noindex">State Machine - I'm love</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=4b8efzX1GfQ" target="_blank" rel="nofollow, noindex">Cool James & Black Teacher - Comala wesa</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=Y5fNFsgyQ60" target="_blank" rel="nofollow, noindex">Daze - Mizz Molly</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=yalYHZAVOxc" target="_blank" rel="nofollow, noindex">Chezelle - Destiny</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=H8valGilJuY" target="_blank" rel="nofollow, noindex">Chezelle - You Got A Little Piece Of My Heart</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=wJEmyg4wQFc" target="_blank" rel="nofollow, noindex">Spot the Difference - Dont close your door</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=UrDlcp1Xs-w" target="_blank" rel="nofollow, noindex">Spot the Difference - My little angel</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <div className="contact-details">
                        <a className="contact-info" href="mailto:uffe.larson@gmail.com" target="_blank"><img src={Email} />Email</a>
                        <a className="contact-info" href="https://www.linkedin.com/in/ulf-larsson-412080b8/" target="_blank"><img src={LinkedIn} />LinkedIn</a>
                        <a className="contact-info" href="https://github.com/ularson/" target="_blank"><img src={GitHub} />Github</a>
                    </div>
                </div>
            </div>
            </nav>
    </header>
 );
}

export default Header