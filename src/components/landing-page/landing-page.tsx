import { Component, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

// import i18n from '../../stores/i18n.store';

@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.css',
})
export class LandingPage {
  constructor() {
    document.title = `Logoschmiede`;
  }

  render() {
    return (
      <div>
        <ResponsiveContainer class="hero">
          {/* <hgroup>
            <h1 class="no-print-font hero-heading">Let's build your best digital self.</h1>
            <h2 class="no-print-font hero-subheading">{i18n.landingPage.greeting}</h2>
            <p class="landing-page__intro intro-paragraph no-print-font">{i18n.landingPage.intro}</p>
            <p class="no-print-font">&bdquo;{i18n.landingPage.intro2}&rdquo; &#8212; Matthias Max</p>
            <stencil-route-link url={`/${i18n.contact.link}`} class="hero-button hide-print" anchorClass="btn-get-started">
              {i18n.landingPage.cta}
            </stencil-route-link>
          </hgroup> */}
          <img class="landing-page__bg" src="./assets/img/logo_small.png" loading="lazy" alt="Logo der Logoschmiede" />
        </ResponsiveContainer>
{/* 
        <div class="companies">
          <ResponsiveContainer>
                       
          </ResponsiveContainer>
        </div> */}


      </div>
    );
  }
}
