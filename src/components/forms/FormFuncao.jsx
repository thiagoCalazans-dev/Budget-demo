import React from 'react';
import DefaultButton from '../layout/DefaultButton';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import { Container, TextField } from '@mui/material';
import { useState } from 'react';

export default function FormFuncao ({handleSubmit}) {

   const [funcao, setFuncao] = useState({})

    function submit (e) {
       e.preventDefault()
        handleSubmit(funcao)
     }

 function handleChange(e) {
    setFuncao({ ...funcao, [e.target.id]: e.target.value })
  }

    return (
        <Container component="article" maxWidth="sm">           
        <form onSubmit={submit}>
        <div>
        <TextField variant="outlined" margin="normal" label="ID" id="id" type="text" value={funcao.id} onChange={handleChange} size="" />
        </div>
        <div>
        <TextField variant="outlined" margin="normal" label="Descrição" id="descricao" type="text" value={funcao.descricao} onChange={handleChange}   />  
        </div>
        <DefaultButton variant="contained" color="primary" type="submit" endIcon={<SaveTwoToneIcon/>}
        >Salvar</DefaultButton>
        </form>
        </Container>
    )


} 

