import { useState } from 'react'
import './App.css'
import tourismLogo from './assets/name.png'
import batangasLogo from './assets/batangas tourism logo.png'
import cliffImage from './assets/main image.png'
import churchImage from './assets/image 2 (2).png'
import waterParkImage from './assets/tourist 1.png'
import beachImage from './assets/tourist 2.png'
import mountainImage from './assets/tourist 3.png'
import beachesImage from './assets/Rectangle 9.png'
import adventureImage from './assets/Rectangle 10.png'
import foodImage from './assets/Rectangle 11.png'
import heritageImage from './assets/Rectangle 12.png'
import localImage from './assets/Rectangle 13.png'
import gemsImage from './assets/Rectangle 14.png'

type Card = { image: string; title: string; location: string }

const cards: Card[] = [
  { image: waterParkImage, title: 'Aquaria Water Park', location: 'Calatagan' },
  { image: beachImage, title: 'Masasa Beach', location: 'Tingloy' },
  { image: mountainImage, title: 'Mt. Batulao', location: 'Nasugbu' },
]

const experiences = [
  { image: beachesImage, title: 'Beaches & Leisure' },
  { image: adventureImage, title: 'Nature & Adventure' },
  { image: heritageImage, title: 'Heritage & Culture' },
  { image: foodImage, title: 'Food & Gastronomy' },
  { image: localImage, title: 'Local Experiences' },
  { image: gemsImage, title: 'Hidden Gems' },
]

function App() {
  const [searchNotice, setSearchNotice] = useState('')

  function search() {
    setSearchNotice('Explore Batangas destinations below.')
    document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <header className="site-header">
        <a href="#home" aria-label="Lakbay Luntian Batangas home"><img className="lakbay-logo" src={tourismLogo} alt="Lakbay Luntian Batangas" /></a>
        <nav aria-label="Primary navigation"><a href="#home">Home</a><a href="#story">Destination</a><a href="#destinations">Experiences</a><a href="#footer">Travel Guide</a><a href="#footer">About</a></nav>
        <img className="batangas-logo" src={batangasLogo} alt="Batangas: All here. So near." />
      </header>

      <section className="hero" id="home">
        <img src={cliffImage} alt="Rocky cliff above turquoise water in Batangas" />
        <div className="hero-search"><label><span>Where to?</span><input aria-label="Where to" /></label><label><span>Travel type</span><select aria-label="Travel type"><option value=""> </option><option>Beach</option><option>Nature</option><option>Culture</option></select></label><label><span>When</span><input aria-label="When" /></label><label><span>Guest</span><input aria-label="Guest" /></label><button type="button" onClick={search} aria-label="Search destinations"><span /></button></div>
        <p className="search-notice" aria-live="polite">{searchNotice}</p>
      </section>

      <section className="story" id="story">
        <div className="story-copy left"><p>BATANGAS TOURISM</p><h1>The perfect travel<br />place for you &amp;<br />your family</h1><span>Escape to a peaceful sanctuary surrounded by gardens, mountain views, and the quiet charm of Nasugbu, Batangas.</span></div>
        <div className="church-wrap"><img src={churchImage} alt="Caleruega Church in Nasugbu, Batangas" /><div className="church-badge"><small>NASUGBU BATANGAS</small><em>Caleruega<br />Church</em></div></div>
        <div className="story-copy right"><h2>Where Faith<br />Meets the<br />Mountains</h2><span>Escape to a peaceful sanctuary surrounded by gardens, mountain views, and the quiet charm of Nasugbu, Batangas.</span></div>
      </section>

      <section className="destinations" id="destinations">
        <p>CHOOSE YOUR EXPERIENCE</p><h2>Top attraction destinations</h2><span className="section-intro">Discover Batangas' must-visit destinations, from serene churches and heritage<br className="desktop-break" /> landmarks to beautiful beaches, nature escapes, and exciting attractions.</span>
        <div className="destination-grid">{cards.map((card) => <article key={card.title}><img src={card.image} alt="" /><div><div className="card-title-row"><h3>{card.title}</h3><a href="#footer" aria-label={`View ${card.title}`}>View <b aria-hidden="true">&#8599;</b></a></div><p className="location"><i />{card.location}</p><span>Enjoy exciting water attractions, refreshing pools, and beautiful coastal views at Aquaria Water Park in Calatagan, Batangas - perfect for a fun and relaxing getaway.</span><div className="card-actions"><button type="button">Explore <b aria-hidden="true">&#8594;</b></button><a href="#footer">Learn more</a></div></div></article>)}</div>
        <div className="experience-collection">{experiences.map((experience) => <a className="experience-tile" href="#footer" key={experience.title}><img src={experience.image} alt="" /><span>{experience.title}</span></a>)}</div>
      </section>

      <footer id="footer" className="site-footer">
        <svg className="footer-art" viewBox="0 0 1440 260" aria-hidden="true" preserveAspectRatio="none"><path d="M0 175 C110 120 170 164 270 108 S425 177 548 88 S714 174 827 113 S1010 178 1124 93 S1312 152 1440 58" /><path d="M0 216 C123 176 222 233 352 196 S573 235 702 188 S915 234 1045 192 S1284 232 1440 176" /></svg>
        <div className="footer-main"><div className="footer-brand"><img src={tourismLogo} alt="Lakbay Luntian Batangas" /><p>Discover. Experience. Belong.</p><div className="social-links" aria-label="Social media"><a href="#footer" aria-label="Facebook">f</a><a href="#footer" aria-label="Instagram">ig</a><a href="#footer" aria-label="YouTube">yt</a><a href="#footer" aria-label="TikTok">tt</a></div></div><div className="footer-column"><h2>Explore</h2><a href="#destinations">Destinations</a><a href="#destinations">Beaches &amp; Islands</a><a href="#destinations">Nature &amp; Mountains</a><a href="#story">Churches &amp; Heritage</a><a href="#destinations">Resorts &amp; Leisure</a><a href="#destinations">Food &amp; Local Flavors</a></div><div className="footer-column"><h2>Plan Your Trip</h2><a href="#footer">Travel Guide</a><a href="#footer">Itineraries</a><a href="#footer">Getting Around</a><a href="#footer">Travel Tips</a><a href="#footer">FAQs</a></div><div className="footer-column"><h2>About</h2><a href="#footer">About Us</a><a href="#footer">Contact</a><a href="#footer">Tourism Partners</a><a href="#footer">Privacy Policy</a><a href="#footer">Terms</a></div></div>
        <div className="footer-bottom"><span>&copy; 2026 Lakbay Luntian Batangas. All rights reserved.</span><span>People <b aria-hidden="true">&bull;</b> Places <b aria-hidden="true">&bull;</b> Possibilities</span></div>
      </footer>
    </main>
  )
}

export default App
