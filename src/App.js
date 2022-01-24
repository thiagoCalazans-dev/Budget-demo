import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import UnidadeExecutora from "./components/pages/UnidadeExecutora";
import SubFuncao from "./components/pages/SubFuncao";
import OrcamentoDespesa from "./components/pages/OrcamentoDespesa";
import OrcamentoReceita from "./components/pages/OrcamentoReceita";
import Funcao from "./components/pages/Funcao";
import Navbar from "./components/layout/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#01579b",
      light: "#b3e5fc",
    },
    secondary: {
      dark: "#778899",
      main: "#e0e0e0",
      light: "#fafafa",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  
  typography: {
    body1: {
      color: '#01579b'
    },
    body2: {
      color: '##fafafa'
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Funcao" element={<Funcao />} />
          <Route path="/UnidadeExecutora" element={<UnidadeExecutora />} />
          <Route path="/SubFuncao" element={<SubFuncao />} />
          <Route path="/OrcamentoDespesa" element={<OrcamentoDespesa />} />
          <Route path="/OrcamentoReceita" element={<OrcamentoReceita />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
