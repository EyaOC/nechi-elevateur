import React, { useState } from "react";
import "./App.css";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-block">
          <img src="/logo-nechi.png" alt="Nechi Elevateur Logo" className="site-logo" />
          <span className="site-title">Nechi Elevateur</span>
        </div>
        <nav className="main-nav">
          <a href="/#accueil">Accueil</a>
          <a href="/#services">Nos services</a>
          <div
  className="dropdown"
  style={{position:'relative', display:'inline-block'}}
  onMouseEnter={() => setOpenMenu(true)}
  onMouseLeave={() => { setOpenMenu(false); setOpenSubMenu(false); }}
>
  <a
    href="#realisations"
    className="dropdown-btn"
    style={{background:'none', border:'none', color:'inherit', font:'inherit', cursor:'pointer', padding:0, textDecoration:'none'}}
    tabIndex={0}
  >
    Nos réalisations
  </a>
  {openMenu && (
    <div className="dropdown-menu" style={{position:'absolute', top:'100%', left:0, background:'#fff', color:'#101522', boxShadow:'0 2px 8px rgba(0,0,0,0.12)', borderRadius:8, minWidth:180, zIndex:99}}>
      <div
        style={{position:'relative'}}
        onMouseEnter={() => setOpenSubMenu(true)}
      >
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0.7rem 1.1rem', cursor:'pointer'}}>
          <a href="/projets" style={{color:'#101522', textDecoration:'none', fontWeight:'bold'}}>Nos Projets</a>
        </div>
        {openSubMenu && (
          <div className="submenu" style={{marginLeft:12, marginBottom:6, background:'#fff', borderRadius:8, boxShadow:'0 2px 8px rgba(0,0,0,0.12)'}}>
            <div style={{padding:'0.5rem 1rem', cursor:'pointer'}}>Plateforme Industrielle</div>
            <div style={{padding:'0.5rem 1rem', cursor:'pointer'}}>Monte-charge Industriel</div>
            <div style={{padding:'0.5rem 1rem', cursor:'pointer'}}>Toit Ouvrant Automatique</div>
            <div style={{padding:'0.5rem 1rem', cursor:'pointer'}}>Monte-plat</div>
          </div>
        )}
      </div>
    </div>
  )}
</div>
          <a href="/#about">À Propos</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
