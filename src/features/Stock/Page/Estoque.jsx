import styled from "styled-components"
import { Input } from "../../../components/UI/Input/Input"
import { ButtonBuscar } from "../../../components/UI/Button/Button"
import {  Table } from "../../../components/UI/Table/Table"
import { useEffect, useState } from "react"
import { Label } from "../../../components/UI/Input/styles"
 
const Pesquisa = styled.div`
    border: 1px solid red;
    height: 20vh;
    position: relative;
`

const Main = styled.div`
    position: relative;
    border: 1px solid green;
    height: 70vh;
    top: 50%;
`


function Stock() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function carregarProdutos(){
            const response = await fetch(
              'http://localhost:5000/api/Product' 
            );

            const data = await response.json();

            setProdutos(data);
        }
        carregarProdutos();
    }, []);

    const columns = [
        {
            key:"codigo",
            label: "Codigo"
        },
        {
            key:"nome",
            label: "Nome"
        },
        {
            key: "estoqueAtual",
            label: "Estoque Atual"
        }
    ]

    return(
        <Pesquisa>
            <Input
                label="Pesquisa de Estoque"
                placeholder="Codigo do Produto"
            />

            <ButtonBuscar>
                Buscar
            </ButtonBuscar>

            <Main>
                <Table
                    columns={columns}
                    data={produtos}
                />               
            </Main>

        </Pesquisa>
    )
}

export default Stock