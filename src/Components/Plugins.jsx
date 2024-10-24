import Product from './Product.jsx'

import gmeq1 from '../assets/gm-eq-1.png';
import gmcomp1 from '../assets/gm-comp-1.png';
import gmsq1 from '../assets/gm-sq-1.png';

function Plugins() {
    return(
        <div className="plugins row mb-5">
          <h2>Plugins</h2>
          <p>Here is a list of audio plugins that I have coded</p>
          <div className="col-xs-12 col-lg-4">
            <a href="/gmeq1">
                <Product title="GM EQ 1" text="A 5 band equalizer." image={gmeq1} />
            </a>
          </div>
          <div className="col-xs-12 col-lg-4">
            <a href="/gmcomp1">
                <Product title="GM Comp 1" text="A 3 multiband compressor." image={gmcomp1} />
            </a>
          </div>
          <div className="col-xs-12 col-lg-4">
            <a href="/gmsq1">
                <Product title="GM SQ 1" text="A virtual syntheseizer with 3 oscillators." image={gmsq1} />
            </a>
          </div>
        </div>
    );
}

export default Plugins