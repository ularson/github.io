import Header from '../Components/Header.jsx';
import Hero from '../Components/Hero.jsx';
import Product from '../Components/Product.jsx';
import Footer from '../Components/Footer.jsx'

import gmsq1 from '../assets/gm-sq-1.png';
import github from '../assets/github-icon.png';

function GMEQ1 () {
    return (
        <>
        <Header />
        <Hero />
        <div className="plugin container">
          <div className="row mb-5">
            <div className="col">
              <h2>GM SQ 1</h2>
              <p>A virtual syntheseizer built with Juce and C++ that features 3 oscillators, 3 envelopes, 2 lfo's, filter and a modulation matrix.</p>
              <img className="plugin-image" src={gmsq1} />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <h4>Settings</h4>
              <p>Oscillators:</p>
              <ul>
                <li>Wave: sine, saw, square, triangle, pulse and noise waveforms</li>
                <li>Level: the oscillators gain</li>
                <li>Coarse: semitones pitch</li>
                <li>Fine: finetuning pitch</li>
                <li>PW: the pulsewith duty setting</li>
              </ul>
              <p>Oscillator 1 also has a sync knob for setting the sync between it and oscillator 2.<br />
              Oscillator 2 has a FM knob for setting the freqency modulation between it and oscillator 1</p>
              
              <p>Filter</p>
              <ul>
                <li>Cutoff: the cutoff fequency ranging from 20 to 20000 hertz</li>
                <li>Res: the resonance of the filter</li>
                <li>Env: the amount of modulation from Env 1</li>
                <li>Key: how the filter acts across the keyboard</li>
                <li>Type: lowpass 24db, lowpass 12db, bandpass 24db, bandpass 12db, high pass 24db and high pass 12db</li>
              </ul>

            <p>Envelope</p>
              <ul>
                <li>Attack: the time taken for the rise of the level from nil to peak</li>
                <li>Decay: the time taken for the level to reduce from the attack level to the sustain level</li>
                <li>Sustain: the level maintained until the key is released</li>
                <li>Release: the time taken for the level to decay to nil</li>
                <li>Key: how the envelope acts acrsoss the keyboard</li>
                <li>Vel: how the velocity affects the envelope</li>
              </ul>

              <p>LFO (Low Frequency Ocillator)</p>
              <ul>
                <li>Wave: the waveform of the lfo</li>
                <li>Rate: the frequency of the lfo</li>
                <li>Gain: the gain of the lfo</li>
                <li>Reset: if the lfo should reset on key press</li>
                <li>Source: none or modulation</li>
                <li>Destination: pitch, cutoff and pulsewith</li>
              </ul>

              <p>Modulation sources</p>
              <ul>
                <li>Osc 1 Pitch</li>
                <li>Osc 2 Pitch</li>
                <li>Osc 3 Pitch</li>
                <li>Filter cutoff</li>
                <li>Pulse width</li>
              </ul>

              <p>Modulation destinations</p>
              <ul>
                <li>Env 1</li>
                <li>Env 2</li>
                <li>Lfo 1</li>
                <li>Lfo 2</li>
                <li>Vel (velocity)</li>
                <li>Mod (modulation wheel)</li>
              </ul>

              <p>Master</p>
              <ul>
                <li>Vol: the output level of the plugin</li>
                <li>Voices: the number of voices</li>
                <li>Pitch up: the range of the pitch bend wheel</li>
                <li>Pitch down: the range of the pitch bend wheel</li>
              </ul>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <p>I you want to learn how to create a virtual syntheseizer yourself I recommend the Audio Programmer's youtube channel.<br />
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ADG6Rsd3ekg?si=cWOVBv9yk5RC0SEJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </p>
              <p>You can download my code on my github page below.</p>
            </div>
          </div>
          <Footer gitHubUrl={"https://github.com/ularson/GMSQ1"} />
        </div>
      </>
    );
}

export default GMEQ1