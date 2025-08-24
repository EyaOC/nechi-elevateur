import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App" id="accueil">
      <Header />
      <section className="hero-section">
        <div className="hero-left">
          <h1>
            Fabricant d'Ascenseurs <br />
            <span className="hero-highlight">de Qualité</span>
          </h1>
          <p className="hero-desc">
            Spécialistes en fabrication d'ascenseurs, monte-charges et toits ouvrants depuis plus de 20 ans. Nous offrons des solutions de transport vertical adaptées à vos besoins.
          </p>
          <a href="#contact" className="hero-btn">Demander un Devis</a>
        </div>
        <div className="hero-right">
          <video className="hero-video" src="/elevator-demo.mp4" poster="/elevator-poster.jpg" autoPlay muted loop playsInline style={{width:'100%', borderRadius:'16px', boxShadow:'0 2px 16px rgba(10,37,64,0.10)'}}>
            Votre navigateur ne supporte pas la vidéo HTML5.
          </video>
        </div>
      </section>
      <section id="services" className="services-section">
        <div className="services-header">
          <h2>Nos Services</h2>
          <p className="services-intro">Découvrez notre gamme complète de services pour tous vos besoins en transport vertical</p>
        </div>
        <div className="services-cards">
          <div className="service-card">
            <div className="service-icon service-icon-elevator">🏢</div>
            <h3>Ascenseurs</h3>
            <p>Fabrication et installation d'ascenseurs pour bâtiments résidentiels et commerciaux.</p>
            <ul>
              <li>✔️ Installation professionnelle</li>
              <li>✔️ Maintenance préventive</li>
              <li>✔️ Modernisation</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon service-icon-montecharge">📦</div>
            <h3>Monte-charges</h3>
            <p>Solutions de transport vertical pour marchandises et équipements lourds.</p>
            <ul>
              <li>✔️ Capacité jusqu'à 5 tonnes</li>
              <li>✔️ Systèmes hydrauliques</li>
              <li>✔️ Sécurité renforcée</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon service-icon-toit">🏠</div>
            <h3>Toits Ouvrants</h3>
            <p>Systèmes de toits ouvrants automatiques et manuels. Solutions innovantes pour améliorer l'éclairage naturel et la ventilation.</p>
            <ul>
              <li>✔️ Motorisation silencieuse</li>
              <li>✔️ Étanchéité garantie</li>
              <li>✔️ Télécommande incluse</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="realisations" className="realisations-section">
        <div className="realisations-header">
          <h2>Nos Réalisations</h2>
          <p className="realisations-intro">Découvrez quelques-uns de nos projets récents et nos installations réussies</p>
        </div>
        <div className="realisations-cards">
          <div className="real-card">
            <img src="/real1.jpg" alt="Plateforme Industrielle" className="real-img" />
            <div className="real-content">
              <h3>Plateforme Industrielle</h3>
              <p>Installation complète pour immeuble de 8 étages avec finitions haut de gamme.</p>
              <div className="real-status">Projet terminé</div>
              <a href="#" className="real-link">Voir détails →</a>
            </div>
          </div>
          <div className="real-card">
            <img src="/real2.jpeg" alt="Monte-charge Industriel" className="real-img" />
            <div className="real-content">
              <h3>Monte-charge Industriel</h3>
              <p>Solution sur mesure pour entrepôt avec capacité de charge de 2 tonnes.</p>
              <div className="real-status">En cours</div>
              <a href="#" className="real-link">Voir détails →</a>
            </div>
          </div>
          <div className="real-card">
            <img src="/real3.jpg" alt="Toit Ouvrant Automatique" className="real-img" />
            <div className="real-content">
              <h3>Toit Ouvrant Automatique</h3>
              <p>Installation de toit ouvrant motorisé pour restaurant avec système de capteurs.</p>
              <div className="real-status">Projet terminé</div>
              <a href="#" className="real-link">Voir détails →</a>
            </div>
          </div>
        </div>
        <div className="realisations-footer">
          <a href="/projets" className="realisations-btn">Voir Tous Nos Projets</a>
        </div>
      </section>
      <main>
        <section id="about" className="about-section">
        <div className="about-left">
          <h2>À Propos de Nechi Elevateur</h2>
          <p className="about-desc">Depuis plus de 20 ans, Nechi Elevateur s'impose comme un leader dans la fabrication et l'installation d'ascenseurs, monte-charges et systèmes de toits ouvrants. Notre expertise technique et notre engagement envers la qualité nous permettent de livrer des solutions fiables et durables.</p>
          <div className="about-stats">
            <div><span className="about-stat-num">500+</span><span className="about-stat-label">Projets Réalisés</span></div>
            <div><span className="about-stat-num">20+</span><span className="about-stat-label">Années d'Expérience</span></div>
            <div><span className="about-stat-num">50+</span><span className="about-stat-label">Clients Satisfaits</span></div>
            <div><span className="about-stat-num">24/7</span><span className="about-stat-label">Support Client</span></div>
          </div>
          <div className="about-actions">
            <button className="about-btn primary">En Savoir Plus</button>
            <button className="about-btn">Télécharger Brochure</button>
          </div>
        </div>
        <div className="about-right">
          <img src="/imageApropos.avif" alt="Statistiques Nechi Elevateur" className="about-img" />
        </div>
      </section>
        <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info-col">
            <h2><span className="contact-title-main">Contactez</span><span className="contact-title-accent">-Nous</span></h2>
            <p className="contact-subtitle">Prêt à démarrer votre projet ? Contactez-nous pour un devis personnalisé</p>
            <div className="contact-block">
              <h3>Informations de Contact</h3>
              <ul className="contact-list">
                <li><span className="contact-icon">📍</span> AV habib bourguiba 8060 Beni Khiar, Tunisiae</li>
                <li><span className="contact-icon">📞</span> +216 98202411</li>
                <li><span className="contact-icon">✉️</span> nechielevateur@gmail.com</li>
              </ul>
              <h4>Heures d'Ouverture</h4>
              <div className="contact-hours">
                <div>Lundi - Vendredi <span>8h00 - 18h00</span></div>
                <div>Samedi <span>9h00 - 15h00</span></div>
                <div>Dimanche <span>Fermé</span></div>
              </div>
            </div>
          </div>
          <form className="contact-form-col" action="mailto:nechielevateur@gmail.com" method="POST" encType="text/plain">
            <div className="form-group">
              <label htmlFor="name">Nom Complet</label>
              <input type="text" id="name" name="name" placeholder="Votre nom complet" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="votre@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input type="tel" id="phone" name="phone" placeholder="Votre numéro de téléphone" />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type de Projet</label>
              <select id="type" name="type">
                <option value="">Sélectionnez un type</option>
                <option value="ascenseur">Ascenseur</option>
                <option value="monte-charge">Monte-charge</option>
                <option value="toit-ouvrant">Toit ouvrant</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Décrivez votre projet..." required></textarea>
            </div>
            <button type="submit" className="contact-submit-btn">Envoyer le Message</button>
          </form>
        </div>
      </section>
      </main>
      <footer>
        &copy; {new Date().getFullYear()} Nechi Élévateur
      </footer>
    </div>
  );
}

export default App;
