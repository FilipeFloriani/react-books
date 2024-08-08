import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { livros } from "./dadosPesquisa"

const PesquisaContainer = styled.section`
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

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 150px;
    }

    &:hover {
        border: 1px solid white;
    }
`

const ResultadosContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
   width: 100%;
   margin-top: 20px;
`;

function Pesquisa() {

    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre o que você procura</Subtitulo>
            <Input
                placeholder="O que você está buscando?"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))

                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {livrosPesquisados.length > 0 ?
                <ResultadosContainer>
                    {(livrosPesquisados.map(livro => (
                        <Resultado>
                            <p>{livro.nome}</p>
                            <img src={livro.src} alt="livro.nome" />
                        </Resultado>
                    ))
                    )}
                </ResultadosContainer>
                : (
                    <p>Nenhum resultado para a busca :(</p>
                )}
        </PesquisaContainer>
    )
}

export default Pesquisa