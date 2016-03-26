import React from 'react';
import content from '../data/content.js';
import Header from '../components/Header/Header';
import Parallax from '../components/Parallax/Parallax';
import Section from '../components/Section/Section';

const App = () => {
  const bride = content.details.party.bride.substr(0, content.details.party.bride.indexOf(' '));
  const groom = content.details.party.groom.substr(0, content.details.party.groom.indexOf(' '));
  const names = `${groom} & ${bride}`;

  return (
    <div>
      <Header
        names={names}
      />
      <Parallax bgImage="assets/home.jpg" />
      <Section src="assets/hearts.png">
        <h3>We met through friends, well kinda...</h3>
        <p>
          Kansas City is a small-big town, we had so many mutual friends but
          had never met. Heather's profile picture captured Austin's eye
          one day as he was on Facebook, after a few messages back and forth
          we met for a lunch date and were inseparable even since.
        </p>
      </Section>

      <Parallax bgImage="assets/home.jpg" />

      <Section src="assets/Church.png">
        <h3>
          Celebrate with us on June 17, 2016<br />
          <small>5:00 - 10:00 PM</small>
        </h3>

        <p>
          Palm Beach Gardens<br />
          343 N Federal Hwy<br />
          Palm Beach, FL<br />
          <a href="https://goo.gl/maps/df" target="_blank">Map</a>
        </p>
      </Section>

      <Parallax bgImage="assets/home.jpg" />

      <Section src="assets/travel.png">
        <h3>Travel and Accommodations</h3>

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
      </Section>

      <Parallax bgImage="assets/home.jpg" />

      <Section src="assets/gift.png">
        <h3>Registry</h3>

        <p>
          We are registered at:
          <a href="http://williams-sonoma.com" target="_blank">Williams Sonoma</a>, <a href="http://potterybarn.com" target="_blank">Pottery Barn</a> and <a href="http://target.com" target="_blank">Target</a>
        </p>
      </Section>

      <Parallax bgImage="assets/home.jpg" />
    </div>
  );
};

export default App;
