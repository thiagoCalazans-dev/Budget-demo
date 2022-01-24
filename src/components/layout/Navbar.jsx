import React from "react";
import { AppBar, Toolbar} from "@mui/material";
import LinkButton from "./LinkButton";
import NavButton from "./NavButton";
import HomeIcon from '@mui/icons-material/Home';

const orcamentoItens = [
  { nome: "Receita", url: "/OrcamentoReceita" },
  { nome: "Despesa", url: "/OrcamentoDespesa" },
];

const cadastroItens = [
  { nome: "Função", url: "/Funcao" },
  { nome: "Unidade Executora", url: "/UnidadeExecutora" },
  { nome: "Sub-Função", url: "/SubFuncao" },
];

export default function Navbar() {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <LinkButton to="./" variant="contained" color="secondary" icon={<HomeIcon color="action"/>}/>
          <NavButton nomeBotao="Orçamento" itens={orcamentoItens} />
          <NavButton nomeBotao="Cadastro" itens={cadastroItens} />
        </Toolbar>
      </AppBar>
    </header>
  );
}
