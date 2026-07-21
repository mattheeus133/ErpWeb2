import styled from "styled-components"
import { InputBusca } from "../../../components/UI/Input/Input"
import { ButtonBuscar, ButtonCadProduto } from "../../../components/UI/Button/Button"
import {  Table } from "../../../components/UI/Table/Table"
import { useEffect, useState, useRef} from "react"
import { Label } from "../../../components/UI/Input/styles"
import { Modal } from "../../../components/UI/Modal/initModal"
import { CadProduto } from "./CadastroProduto" 

const Pesquisa = styled.div`
    border: 1px solid red;
    height: 20vh;
    position: relative;
`

const Main = styled.div`
    position: relative;
    border: 1px solid green;
    height: 60vh;
    top: 50%;
`
const DivBtn = styled.div`
    border: 1px solid black;
    height: 50px;
    position: relative;
    top: 50%;
    display: flex;
    align-items: center;
 `

function Stock() {

    const [open, setOpen] = useState(false);

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
        },
        {
            key: "estoqueMinimo",
            label: "Estoque Minimo"
        }

    ]

    return(
        <Pesquisa>
            <InputBusca
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

        <DivBtn>
        <ButtonCadProduto onClick = {() => {
            console.log("Cliquei") 
            setOpen(true)}}>
            + Cadastra
        </ButtonCadProduto>
        </DivBtn>

        <Modal isOpen={open} onClose={() => setOpen(false)}>
            <CadProduto/>
        </Modal>
        </Pesquisa>
    )
}

export default Stock