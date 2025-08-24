import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./Projects";
import AscenseurSurMesure from "./AscenseurSurMesure";
import MonteChargeIndustriel from "./MonteChargeIndustriel";
import ToitOuvrantAutomatique from "./ToitOuvrantAutomatique";
import MontePlat from "./MontePlat";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/ascenseur-sur-mesure" element={<AscenseurSurMesure />} />
        <Route path="/monte-charge-industriel" element={<MonteChargeIndustriel />} />
        <Route path="/toit-ouvrant-automatique" element={<ToitOuvrantAutomatique />} />
        <Route path="/monte-plat" element={<MontePlat />} />
      </Routes>
    </BrowserRouter>
  );
}
