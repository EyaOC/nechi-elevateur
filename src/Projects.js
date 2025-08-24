import React from "react";
import "./App.css";
import "./Projects.css";
import Header from "./Header";

export default function Projects() {
  const projectsData = [
    {
      image: "/real1.jpg",
      alt: "Plateforme Industrielle",
      title: "Plateforme Industrielle",
      details: ["Immeuble 8 étages", "Finitions haut de gamme", "Installation clé en main"],
      status: "Projet terminé"
    },
    {
      image: "/real2.jpeg",
      alt: "Monte-charge Industriel",
      title: "Monte-charge Industriel",
      details: ["Capacité 2 tonnes", "Silencieux", "Solution sur mesure"],
      status: "En cours"
    },
    {
      image: "/real3.jpg",
      alt: "Toit Ouvrant Automatique",
      title: "Toit Ouvrant Automatique",
      details: ["Pour restaurant", "Système de capteurs", "Motorisation avancée"],
      status: "Projet terminé"
    },
    {
      image: "/real4.jpg",
      alt: "Plateforme élévatrice PMR",
      title: "Plateforme élévatrice PMR",
      details: ["Sécurité", "Accessibilité", "Normes PMR respectées"],
      status: "Projet terminé"
    }
  ];

  return (
    <>
      <Header />
      <div className="projects-page" style={{background:'#fff', minHeight:'100vh', color:'#222', padding:'60px 0'}}>
        <div className="container" style={{maxWidth:1200, margin:'0 auto', padding:'0 24px'}}>
          <div style={{fontSize:'1.1rem', color:'#444', marginBottom:24, whiteSpace:'pre-line'}}>
  <strong style={{fontSize:'2.8rem', fontWeight:700, color:'#080707', display:'block', marginBottom:40}}>Nos projets</strong>
  Chez Nechi Élévateur, chaque réalisation est le fruit d’un savoir-faire technique, d’une écoute attentive et d’un engagement total envers nos clients.<br/>
  Nous concevons, fabriquons et installons des solutions sur mesure : plateformes industrielles, monte-charges, élévateurs pour personnes, et bien plus encore.<br/><br/>
  🔧 Que ce soit dans l’industrie, le commerce ou la logistique, nos projets s’adaptent aux besoins spécifiques de chaque site pour gagner en efficacité, sécurité et productivité.<br/><br/>
  ➡️ Découvrez ci-dessous quelques-unes de nos réalisations, classées par catégorie.
</div>
          <h1 style={{fontSize:'2.8rem', fontWeight:700, color:'#080707', marginBottom:40}}>Tous Nos Projets</h1>
          <p style={{fontSize:'1.25rem', marginBottom:36, color:'#080707'}}>Découvrez l'ensemble de nos réalisations, de l'ascenseur résidentiel aux solutions industrielles sur mesure.</p>
          <div className="projects-list">
            {/* Bloc personnalisé Ascenseur Sur Mesure */}
            <div className="project-row">
  <div className="project-image">
    <img src="/ascenseur-sur-mesure.jpg" alt="Ascenseur Sur Mesure" />
  </div>
  <div className="project-info" style={{flex: 1, minWidth: 300}}>
    <h2 style={{fontSize:'2rem', fontWeight:700, marginBottom:12}}>🛗 Ascenseur Sur Mesure</h2>
    <div style={{fontSize:'1.15rem', fontWeight:500, marginBottom:10, color:'#fff'}}>Élevez vos standards de confort et d’accessibilité.</div>
    <div style={{fontSize:'1.05rem', color:'#fff', marginBottom:18}}>
      Nechi Élévateur conçoit et installe des ascenseurs personnalisés, adaptés à tous types de bâtiments : résidentiels, professionnels ou publics.<br/>
      Nos solutions allient sécurité, design et performance, avec une intégration parfaite dans votre environnement architectural.
    </div>
    <a href="/ascenseur-sur-mesure" className="project-btn">Voir le projet</a>
  </div>
</div>
            {/* Bloc personnalisé Plateforme Industrielle */}
<div className="project-row">
  <div className="project-image">
    <img src={projectsData[0].image} alt={projectsData[0].alt} />
  </div>
  <div className="project-info" style={{flex: 1, minWidth: 300}}>
    <h2 style={{fontSize:'2rem', fontWeight:700, marginBottom:12}}>🔩 Plateforme Industrielle</h2>
    <div style={{fontSize:'1.15rem', fontWeight:500, marginBottom:10, color:'#fff'}}>Optimisez vos espaces avec des solutions robustes et sur mesure.</div>
    <div style={{fontSize:'1.05rem', color:'#fff', marginBottom:18}}>
      Nechi Élévateur conçoit et installe des plateformes industrielles adaptées à tous types de bâtiments, pour augmenter la surface de travail ou de stockage sans extension au sol.<br/>
      <b>Sécurité, solidité et performance</b> au cœur de chaque réalisation.
    </div>
    <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
  <button className="project-btn">Voir toutes nos réalisations</button>
</div>
  </div>
</div>
{/* Bloc personnalisé Monte-charge Industriel */}
<div className="project-row reverse">
  <div className="project-image">
    <img src={projectsData[1].image} alt={projectsData[1].alt} />
  </div>
  <div className="project-info" style={{flex: 1, minWidth: 300}}>
    <h2 style={{fontSize:'2rem', fontWeight:700, marginBottom:12}}>🏗️ Monte-charge Industriel</h2>
    <div style={{fontSize:'1.15rem', fontWeight:500, marginBottom:10, color:'#fff'}}>Transportez vos charges en toute sécurité, quelle que soit leur taille ou leur poids.</div>
    <div style={{fontSize:'1.05rem', color:'#fff', marginBottom:18}}>
      Nechi Élévateur conçoit des monte-charges industriels sur mesure, capables de soulever jusqu’à 2 tonnes, dans le respect des normes de sécurité les plus strictes.<br/>
      Robustes, silencieux et adaptés à tous les environnements professionnels.
    </div>
    <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
  <button className="project-btn">Voir toutes nos réalisations</button>
</div>
  </div>
</div>
{/* Bloc personnalisé Toit Ouvrant Automatique */}
<div className="project-row">
  <div className="project-image">
    <img src={projectsData[2].image} alt={projectsData[2].alt} />
  </div>
  <div className="project-info" style={{flex: 1, minWidth: 300}}>
    <h2 style={{fontSize:'2rem', fontWeight:700, marginBottom:12}}>🌤️ Toit Ouvrant Automatique</h2>
    <div style={{fontSize:'1.15rem', fontWeight:500, marginBottom:10, color:'#fff'}}>Apportez lumière, confort et sécurité à vos espaces.</div>
    <div style={{fontSize:'1.05rem', color:'#fff', marginBottom:18}}>
      Nechi Élévateur installe des toits ouvrants motorisés intelligents, intégrant capteurs, systèmes anti-intempéries et contrôle automatisé.<br/>
      Une solution idéale pour les restaurants, ateliers ou bâtiments professionnels nécessitant une ouverture sécurisée vers l’extérieur.
    </div>
    <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
  <button className="project-btn">Voir toutes nos réalisations</button>
</div>
  </div>
</div>
{/* Bloc personnalisé Monte-plat */}
<div className="project-row reverse">
  <div className="project-image">
    <img src="/monteplat.jpg" alt="Monte-plat" />
  </div>
  <div className="project-info" style={{flex: 1, minWidth: 300}}>
    <h2 style={{fontSize:'2rem', fontWeight:700, marginBottom:12}}>🍽️ Monte-plat</h2>
    <div style={{fontSize:'1.15rem', fontWeight:500, marginBottom:10, color:'#fff'}}>Un gain de temps et d'efficacité pour vos services.</div>
    <div style={{fontSize:'1.05rem', color:'#fff', marginBottom:18}}>
      Le monte-plat est la solution idéale pour le transport rapide de plats, documents ou marchandises légères entre plusieurs niveaux.<br/>
      Compact, discret et silencieux, il est particulièrement apprécié dans les restaurants, hôtels, bureaux ou établissements médicaux.
    </div>
    <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
  <button className="project-btn">Voir toutes nos réalisations</button>
</div>
  </div>
</div>

{/* Fin des blocs personnalisés */}

{/* Affichage des autres projets */}
{projectsData.slice(4).map((project, idx) => (
  <div
    key={idx}
    className={`project-row flex-row${(idx+5) % 2 === 1 ? ' reverse' : ''}`}
  >
    <div className="project-image">
      <img src={project.image} alt={project.alt} />
    </div>
    <div className="project-info">
      <h2>{project.title}</h2>
      <ul>
        {project.details.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
      <div className="project-status">{project.status}</div>
      <button className="project-btn">Voir plus de projets</button>
    </div>
  </div>
))}
          </div> {/* fermeture .projects-list */}
        </div> {/* fermeture .container */}
      </div> {/* fermeture .projects-page */}
    </>
  );
}
