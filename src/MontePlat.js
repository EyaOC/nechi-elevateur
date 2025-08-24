import React from "react";
import Header from "./Header";
import "./App.css";

export default function MontePlat() {
  return (
    <>
      <Header />
      <main className="project-detail-main" style={{background:'#f6f7fa', minHeight:'100vh', paddingBottom:40}}>
        <section className="project-detail-hero" style={{background:'#101522', color:'#fff', padding:'60px 0 40px 0', textAlign:'center'}}>
          <h1 style={{fontSize:'2.5rem', fontWeight:800, marginBottom:12}}>Monte-plat</h1>
          <p style={{fontSize:'1.2rem', maxWidth:600, margin:'0 auto', color:'#ffd700', fontWeight:500}}>
            Monte-plat compact, silencieux, idéal pour restaurants, hôtels, bureaux et établissements médicaux.
          </p>
        </section>
        <section className="project-detail-content" style={{maxWidth:900, margin:'40px auto 0 auto', background:'#fff', borderRadius:16, boxShadow:'0 2px 16px rgba(10,37,64,0.10)', padding:32}}>
          <img src="/monteplat.jpg" alt="Monte-plat" style={{width:'100%', borderRadius:12, marginBottom:24}} />
          <h2 style={{color:'#101522', fontWeight:700, marginBottom:16}}>Présentation du projet</h2>
          <p style={{fontSize:'1.1rem', color:'#333', marginBottom:20}}>
            Le monte-plat facilite le transport rapide de plats, documents ou marchandises légères entre plusieurs niveaux, tout en restant discret et facile à intégrer.
          </p>
          <ul style={{fontSize:'1.05rem', color:'#222', marginBottom:24, paddingLeft:24}}>
            <li>Capacité adaptée à la restauration</li>
            <li>Fonctionnement silencieux</li>
            <li>Sécurité anti-chute</li>
            <li>Installation rapide</li>
          </ul>
          <h3 style={{color:'#101522', fontWeight:600, marginBottom:10}}>Bénéfices pour le client</h3>
          <ul style={{fontSize:'1.05rem', color:'#222', marginBottom:24, paddingLeft:24}}>
            <li>Gain de temps pour le service</li>
            <li>Discrétion et hygiène</li>
            <li>Amélioration du confort de travail</li>
          </ul>
          <div style={{textAlign:'center', marginTop:32}}>
            <a href="/projets" className="project-btn" style={{background:'#ffd700', color:'#101522', padding:'12px 32px', borderRadius:8, fontWeight:600, fontSize:'1.1rem', textDecoration:'none'}}>Retour aux projets</a>
          </div>
        </section>
      </main>
    </>
  );
}
