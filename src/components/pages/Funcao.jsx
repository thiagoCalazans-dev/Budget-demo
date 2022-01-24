import { useEffect, useState } from "react";
import FeedTwoToneIcon from "@mui/icons-material/FeedTwoTone";
import useTable from "../hooks/useTable";
import DefaultButton from "../layout/DefaultButton";
import FormFuncao from "../forms/FormFuncao";
import DefaultModal from "../layout/DefaultModal";
import { TableBody, Typography, TableRow, TableCell } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.secondary.dark,
  },
}));

const headCells = [
  { id: "id", label: "ID" },
  { id: "id_descricao", label: "Descrição" },
];

export default function Funcao() {
  const classes = useStyles();
  const [criar, setCriar] = useState(false);
  const [records, setRecords] = useState([{}]);
  const { TblContainer, TblHead, TblPagination } =
    useTable(records, headCells);

  useEffect(() => {
    fetch("http://localhost:5000/funcao", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setRecords(data);
        console.log(data);
      });
  }, []);

  function abrirCriar() {
    setCriar(true);
  }

  function fecharCriar() {
    setCriar(false);
  }

  function salvarFuncao(funcao) {
    fetch("http://localhost:5000/funcao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(funcao),
    })
      .then((resp) => resp.json())
      .then(() => {
        setCriar(false);
      });
  }

  return (
    <main>
      <DefaultModal
        open={criar}
        onClose={fecharCriar}
        title="Cadastro de função"
      >
        <FormFuncao handleSubmit={salvarFuncao} />
      </DefaultModal>
      <Typography className={classes.title} variant="h4">
        Função
        <DefaultButton
          variant="contained"
          color="primary"
          onClick={abrirCriar}
          endIcon={<FeedTwoToneIcon color="secondary" />}
        >
          Criar
        </DefaultButton>
              </Typography>             
                <TblContainer>
        <TblHead />
        <TableBody>
          {records.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.descricao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination/>
    </main>
  );
}
