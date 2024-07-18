import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 80px 0;
    height: 200px;
    width: 100%
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    width: 100%;
    text-align: center;    
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Pesquisa() {
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre o que você procura</Subtitulo>
            <Input 
                placeholder="O que você está buscando?"
                onBlur={evento => console.log(evento.target.value)}
            />
        </PesquisaContainer>
    )
}

export default Pesquisa