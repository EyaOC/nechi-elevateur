import React from "react";
import Header from "./Header";
import "./App.css";

export default function AscenseurSurMesure() {
  return (
    <>
      <Header />
      <main className="project-detail-main" style={{background:'#f6f7fa', minHeight:'100vh', paddingBottom:40}}>
        <section className="project-detail-hero" style={{background:'#101522', color:'#fff', padding:'60px 0 40px 0', textAlign:'center'}}>
          <h1 style={{fontSize:'2.5rem', fontWeight:800, marginBottom:12}}>🛗 Ascenseur Sur Mesure</h1>
          <p style={{fontSize:'1.2rem', maxWidth:600, margin:'0 auto', color:'#ffd700', fontWeight:500}}>
            Élevez vos standards de confort et d’accessibilité.
          </p>
        </section>
        <section className="project-detail-content" style={{maxWidth:900, margin:'40px auto 0 auto', background:'#fff', borderRadius:16, boxShadow:'0 2px 16px rgba(10,37,64,0.10)', padding:32}}>
          <img src="/ascenseur-sur-mesure.jpg" alt="Ascenseur Sur Mesure" style={{width:'100%', borderRadius:12, marginBottom:24}} />
          <h2 style={{color:'#101522', fontWeight:700, marginBottom:16}}>Présentation du projet</h2>
          <p style={{fontSize:'1.1rem', color:'#333', marginBottom:20}}>
            Nechi Élévateur conçoit et installe des ascenseurs personnalisés, adaptés à tous types de bâtiments : résidentiels, professionnels ou publics.<br/>
            Nos solutions allient sécurité, design et performance, avec une intégration parfaite dans votre environnement architectural.
          </p>
          <ul style={{fontSize:'1.05rem', color:'#222', marginBottom:24, paddingLeft:24}}>
            <li>Conception sur-mesure</li>
            <li>Options de design variées</li>
            <li>Respect des normes de sécurité</li>
            <li>Intégration architecturale optimale</li>
            <li>Maintenance et suivi personnalisés</li>
          </ul>
          <div style={{textAlign:'center', marginTop:32}}>
            <a href="/projets" className="project-btn" style={{background:'#ffd700', color:'#101522', padding:'12px 32px', borderRadius:8, fontWeight:600, fontSize:'1.1rem', textDecoration:'none'}}>Retour aux projets</a>
          </div>
        </section>
      </main>
    </>
  );
}
