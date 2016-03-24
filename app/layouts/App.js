import React, { Component, PropTypes } from 'react';
import content from '../data/content.js';
import Header from '../components/Header/Header';
import Parallax from '../components/Parallax/Parallax';
import Rsvp from '../components/Rsvp/Rsvp';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header
          links={content.links}
          names={content.names}
        />

        <Parallax className="bg0" />

        <section id="section-0" className="story-section content-section">
          <div className="inner">
            <h3>
              <img src="assets/hearts.png" />
              We met through friends, well kinda...
            </h3>
            <p>
              Kansas City is a small-big town, we had so many mutual friends but
              had never met. Heather's profile picture captured Austin's eye
              one day as he was on Facebook, after a few messages back and forth
              we met for a lunch date and were inseparable even since.
            </p>
          </div>
        </section>

        <parallax className="bg1" />

        <section id="section-1" className="where-section content-section">
          <div className="inner">
            <h3>
              <img src="assets/church.png" /><br />
              Celebrate with us on June 17, 2016<br />
              <small>5:00 - 10:00 PM</small>
            </h3>

            <p>
              Palm Beach Gardens<br />
              343 N Federal Hwy<br />
              Palm Beach, FL<br />
              <a href="https://goo.gl/maps/df" target="_blank">Map</a>
            </p>

          </div>
        </section>

        <parallax className="bg2" />

        <section id="section-2" className="travel-section content-section">
          <div className="inner">
            <h3>
              <img src="assets/travel.png" />
              Travel and Accommodations
            </h3>

            <p>With 2 different airports close by, you can choose
            between: <a href="http://www.fll.net" target="_blank">Fort Lauderdale–Hollywood International Airport</a> or
            <a href="http://www.pbia.org" target="_blank">Palm Beach International Airport</a></p>

            <p>
              Delray Beach is a gorgeous destination with so many
              options for accomodations, we decided to leave
              it up to the guests to pick their accomodations. A few
              recommended choices are:
              <a href="http://www.marriott.com/hotels/travel/pbidr-delray-beach-marriott" target="_blank">Delray Beach Marriott</a>,
              <a href="http://www.marriott.com/hotels/travel/pbiri-residence-inn-delray-beach" target="_blank">Residence Inn Delray Beach</a>
              or <a href="http://www.theseagatehotel.com" target="_blank">The Seagate Hotel and Spa</a>.
            </p>
          </div>
        </section>

        <parallax className="bg3" />

        <section id="section-3" className="registry-section content-section">
          <div className="inner">
            <h3>
              <img src="assets/gift.png" />
              Registry
            </h3>

            <p>
              We are registered at:
              <a href="http://williams-sonoma.com" target="_blank">Williams Sonoma</a>, <a href="http://potterybarn.com" target="_blank">Pottery Barn</a> and <a href="http://target.com" target="_blank">Target</a>
            </p>
          </div>
        </section>

        <parallax className="bg4" />

        <section id="section-4" className="rsvp-section content-section">
          <Rsvp />
        </section>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};
