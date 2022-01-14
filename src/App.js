import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import UnidadeExecutora from "./components/pages/UnidadeExecutora";
import SubFuncao from "./components/pages/SubFuncao";
import OrcamentoDespesa from "./components/pages/OrcamentoDespesa";
import OrcamentoReceita from "./components/pages/OrcamentoReceita";
import CreateFuncao from "./components/pages/funcao/CreateFuncao";
import Funcao from "./components/pages/funcao/Funcao";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Funcao" element={<Funcao />} />
        <Route path="/CriarFuncao" element={<CreateFuncao />} />
        <Route path="/UnidadeExecutora" element={<UnidadeExecutora />} />
        <Route path="/SubFuncao" element={<SubFuncao />} />
        <Route path="/OrcamentoDespesa" element={<OrcamentoDespesa />} />
        <Route path="/OrcamentoReceita" element={<OrcamentoReceita />} />
      </Routes>
    </Router>
  );
}
