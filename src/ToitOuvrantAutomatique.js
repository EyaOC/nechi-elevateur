import React from "react";
import Header from "./Header";
import "./App.css";

export default function ToitOuvrantAutomatique() {
  return (
    <>
      <Header />
      <main className="project-detail-main" style={{background:'#f6f7fa', minHeight:'100vh', paddingBottom:40}}>
        <section className="project-detail-hero" style={{background:'#101522', color:'#fff', padding:'60px 0 40px 0', textAlign:'center'}}>
          <h1 style={{fontSize:'2.5rem', fontWeight:800, marginBottom:12}}>Toit Ouvrant Automatique</h1>
          <p style={{fontSize:'1.2rem', maxWidth:600, margin:'0 auto', color:'#ffd700', fontWeight:500}}>
            Toit ouvrant motorisé, capteurs intelligents, sécurité anti-intempéries et confort optimal.
          </p>
        </section>
        <section className="project-detail-content" style={{maxWidth:900, margin:'40px auto 0 auto', background:'#fff', borderRadius:16, boxShadow:'0 2px 16px rgba(10,37,64,0.10)', padding:32}}>
          <img src="/real3.jpg" alt="Toit Ouvrant Automatique" style={{width:'100%', borderRadius:12, marginBottom:24}} />
          <h2 style={{color:'#101522', fontWeight:700, marginBottom:16}}>Présentation du projet</h2>
          <p style={{fontSize:'1.1rem', color:'#333', marginBottom:20}}>
            Ce toit ouvrant automatique équipe un restaurant, permettant une ouverture sécurisée vers l’extérieur tout en assurant l’étanchéité et la sécurité.
          </p>
          <ul style={{fontSize:'1.05rem', color:'#222', marginBottom:24, paddingLeft:24}}>
            <li>Ouverture motorisée</li>
            <li>Capteurs pluie/vent</li>
            <li>Commande centralisée</li>
            <li>Sécurité anti-pincement</li>
            <li>Design sur mesure</li>
          </ul>
          <h3 style={{color:'#101522', fontWeight:600, marginBottom:10}}>Bénéfices pour le client</h3>
          <ul style={{fontSize:'1.05rem', color:'#222', marginBottom:24, paddingLeft:24}}>
            <li>Confort d’utilisation</li>
            <li>Sécurité accrue</li>
            <li>Valorisation de l’espace</li>
          </ul>
          <div style={{textAlign:'center', marginTop:32}}>
            <a href="/projets" className="project-btn" style={{background:'#ffd700', color:'#101522', padding:'12px 32px', borderRadius:8, fontWeight:600, fontSize:'1.1rem', textDecoration:'none'}}>Retour aux projets</a>
          </div>
        </section>
      </main>
    </>
  );
}
