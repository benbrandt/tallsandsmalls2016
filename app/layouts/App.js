import React from 'react';
import content from '../data/content.js';
import Header from '../components/Header/Header';
import Parallax from '../components/Parallax/Parallax';
import Rsvp from '../components/Rsvp/Rsvp';
import Section from '../components/Section/Section';

const App = () => {
  const bride = content.details.party.bride.substr(0, content.details.party.bride.indexOf(' '));
  const groom = content.details.party.groom.substr(0, content.details.party.groom.indexOf(' '));
  const names = `${groom} & ${bride}`;

  const sections = content.sections.map(section => (
    <div key={section.id}>
      <Parallax bgImage={section.parallax} />
      <Section src={section.img}>
        <h3 dangerouslySetInnerHTML={{ __html: section.header }} />
        <p dangerouslySetInnerHTML={{ __html: section.copy }} />
      </Section>
    </div>
  ));

  return (
    <div>
      <Header
        names={names}
      />

      {sections}

      <Parallax index="rsvp" bgImage="assets/IMG_5586@0,5x.jpg" />

      <Section src="assets/date.png">
        <Rsvp
          email={content.contact.email}
          cc={content.contact.cc}
        />
      </Section>
    </div>
  );
};

export default App;
