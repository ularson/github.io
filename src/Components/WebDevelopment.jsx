import Product from "./Product";

import alecta from '../assets/alecta.png';
import arsred from '../assets/arsred.png';
import af from '../assets/af.png';
import lokaler from '../assets/lokaler.png';

function WebDevelopment () {
    return(
        <div className="row mb-5 web-dev">
            <h2>Web Development</h2>
            <p>Here is a list of websites and web pages that I have coded</p>
            <div className="col-xs-12 col-lg-6">
                <a href="https://www.alecta.se" target="_blank">
                    <Product image={alecta} title= "Alecta" text="The hompage of Alecta" />
                </a>
            </div>
            <div className="col-xs-12 col-lg-6">
                <a href="https://www.alecta.se/om-alecta/finansiell-information/arsredovisningar/ars-och-hallbarhetsredovisning-2023/" target="_blank">
                    <Product image={arsred} title= "Årsredovisning" text="The annual report page of Alecta" />
                </a>
            </div>
            <div className="col-xs-12 col-lg-6">
                <a href="https://www.alectafastigheter.se/" target="_blank">
                    <Product image={af} title= "Alectafastigheter" text="The hompage of Alecta Fastigheter" />
                </a>
            </div>
            <div className="col-xs-12 col-lg-6">
                <a href="https://www.alectafastigheter.se/lediga-lokaler/klarabergsviadukten-70-d7-1096/" target="_blank">
                    <Product image={lokaler} title= "Lediga lokaler" text="The properties page of Alecta Fastigheter" />
                </a>
            </div>
        </div>
    );
}

export default WebDevelopment