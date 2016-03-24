import React, { Component, PropTypes } from 'react';
import debounce from '../../utils/Debounce';
import scrollTo from '../../utils/ScrollTo';

export default class Header extends Component {
  componentDidMount() {
    this.rect = this.element.getBoundingClientRect();

    const sections = document.getElementsByClassName('content-section');
    this.sections = Array.from(sections).map(s => {
      return {
        id: s.id,
        rect: s.getBoundingClientRect(),
      };
    });

    debounce(5, this.scroll);
  }

  scroll() {
    const yOffset = window.window.pageYOffset;
    this.headerClass = yOffset > this.rect.height ? 'scrolled' : '';

    if (yOffset === 0) {
      this.active = '';
      return;
    }

    for (let section of this.sections) {
      if (yOffset >= section.rect.top && yOffset <= (section.rect.top + section.rect.height)) {
        this.active = section.id;
      }
    }
  }

  isActive(i) {
    return (this.active === (`section-${i}`)) ? 'active' : '';
  }

  scrollTo(ev, i) {
    ev.preventDefault();
    const dest = document.getElementById(`section-${i}`);
    scrollTo(dest.offsetTop, 500);
  }

  render() {
    const linkItems = this.props.links.map(item =>
       <li key={item.id}>
         <a
           onClick={scrollTo(event, item.id)}
           className={this.isActive(item.id)}
           href="#"
         >
           {item.name}
         </a>
       </li>
    );

    return (
      <header className="headerClass">
        <div className="inner">
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <h1>{this.props.names}</h1>
              </div>
            </div>
            <div className="col-md-8">
              <div className="box">
                <nav>
                  <ul>
                    {linkItems}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.element,
  links: PropTypes.object,
  names: PropTypes.string,
};
