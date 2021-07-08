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

        <div class="about">
          <ResponsiveContainer>
           <p>Die Logoschmiede - gegründet 2020 von Inhaber Mirko Kranitzer ist der ideale Partner für die Markenentwicklung kleiner und mittelständischer Unternehmen. Auch Vereinen und sozialen Projekten sind wir gerne in der Außendarstellung behilflich.</p>
           <p>Als eines der wichtigsten Elemente im Corporate Design ist Ihr Logo unverzichtbar. Als markantes, grafisches Signal macht es auf Ihr Unternehmen aufmerksam. Es zeigt auf den ersten Blick, wer Sie sind und in welcher Branche Sie sich bewegen.</p>
           <p>Es ist ein zentrales Element Ihrer internen und externen Kommunikation. Ein gutes Logo schafft Vertrauen und bindet Zielgruppen.</p>
            <p>Das gibt es nicht von der Stange und schon gar nicht aus dem Billig-Baukasten findiger Anbieter im Internet:</p>
          <p>Hier ist die Gestaltungskatastrophe vorprogrammiert!</p>
          <p>Vom Logo über alle gängigen Werbemittel entwickeln wir kreative Lösungen, die ihr Unternehmen ins richtige Licht rücken und sorgen für eine publikumswirksame und professionelle Umsetzung in den traditionellen und neuen Medien.</p>
          </ResponsiveContainer>
        </div>

        <div class="referenzen">
          <ResponsiveContainer>
            <div class="masonry-container">
            {Array.from(new Array(16)).map((_bla, index) => <figure><img src={`assets/img/referenzen/referenz${index < 9 ? `0${index + 1}` : index + 1}.jpg`} /></figure>)}
            </div>
                        
          </ResponsiveContainer>
        </div>

      </div>
    );
  }
}
