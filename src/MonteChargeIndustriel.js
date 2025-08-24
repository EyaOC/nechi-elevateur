import React from "react";
import Header from "./Header";
import "./App.css";

export default function MonteChargeIndustriel() {
  return (
    <>
      <Header />
      <main className="project-detail-main" style={{background:'#f6f7fa', minHeight:'100vh', paddingBottom:40}}>
        <section className="project-detail-hero" style={{background:'#101522', color:'#fff', padding:'60px 0 40px 0', textAlign:'center'}}>
          <h1 style={{fontSize:'2.5rem', fontWeight:800, marginBottom:12}}>Monte-charge Industriel</h1>
          <p style={{fontSize:'1.2rem', maxWidth:600, margin:'0 auto', color:'#ffd700', fontWeight:500}}>
            Solution sur mesure pour entrepôts, capacité 2 tonnes, robustesse et sécurité maximale.
          </p>
        </section>
        <section className="project-detail-content" style={{maxWidth:900, margin:'40px auto 0 auto', background:'#fff', borderRadius:16, boxShadow:'0 2px 16px rgba(10,37,64,0.10)', padding:32}}>
          <img src="/real2.jpeg" alt="Monte-charge Industriel" style={{width:'100%', borderRadius:12, marginBottom:24}} />
          <h2 style={{color:'#101522', fontWeight:700, marginBottom:16}}>Présentation du projet</h2>
          <p style={{fontSize:'1.1rem', color:'#333', marginBottom:20}}>
            Ce monte-charge industriel permet de transporter des marchandises lourdes et volumineuses entre différents niveaux, tout en garantissant sécurité et efficacité.
          </p>
          <ul style={{fontSize:'1.05rem', color:'#222', marginBottom:24, paddingLeft:24}}>
            <li>Capacité : 2000 kg</li>
            <li>Structure acier renforcé</li>
            <li>Commande à distance</li>
            <li>Systèmes de sécurité avancés</li>
            <li>Installation rapide</li>
          </ul>
          <h3 style={{color:'#101522', fontWeight:600, marginBottom:10}}>Bénéfices pour le client</h3>
          <ul style={{fontSize:'1.05rem', color:'#222', marginBottom:24, paddingLeft:24}}>
            <li>Optimisation des flux logistiques</li>
            <li>Réduction des risques</li>
            <li>Adapté à tous types d’entrepôts</li>
          </ul>
          <div style={{textAlign:'center', marginTop:32}}>
            <a href="/projets" className="project-btn" style={{background:'#ffd700', color:'#101522', padding:'12px 32px', borderRadius:8, fontWeight:600, fontSize:'1.1rem', textDecoration:'none'}}>Retour aux projets</a>
          </div>
        </section>
      </main>
    </>
  );
}
