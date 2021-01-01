import {select, settings, templates} from '../settings.js';

class Home {

  constructor(wrapper){
    const thisHome = this;

    thisHome.render(wrapper);
    thisHome.initWidgets();
  }

  render(wrapper){
    const thisHome = this;

    const generatedHTML = templates.homePage();

    thisHome.dom = {};
    thisHome.dom.wrapper = wrapper;
    thisHome.dom.wrapper.innerHTML = generatedHTML;

    thisHome.dom.carousel = thisHome.dom.wrapper.querySelector(select.home.carousel);
    thisHome.dom.ig = thisHome.dom.wrapper.querySelectorAll(select.home.ig);
  }

  initWidgets(){
    const thisHome = this;

    // eslint-disable-next-line no-undef
    new Flickity(thisHome.dom.carousel, {
      freeScroll: true,
      wrapAround: true,
      autoPlay: true,
      pauseAutoPlayOnHover: false,
      prevNextButtons: false,
    });

    for(const ig of thisHome.dom.ig){
      ig.setAttribute('href', settings.home.ig);
    }

  }
}

export default Home;
