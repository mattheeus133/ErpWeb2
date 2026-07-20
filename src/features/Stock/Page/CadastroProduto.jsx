import styled from "styled-components"
import { InputModal } from "../../../components/UI/Input/Input"
import { useState } from "react";

const MainModal = styled.form`
    display: flex;
    flex-direction: column;
`

export function CadProduto() {

           const [nome, setNome] = useState("");
            const [codigo, setCodigo] = useState("");
            const [precoCusto, setPrecoCusto] = useState();
            const [precoVenda, setPrecoVenda] = useState();
            const [estoqueAtual, setEstoqueAtual] = useState();
            const [estoqueMinimo, setEstoqueMinimo] = useState();

        async function salvarProduto(e){
        e.preventDefault();
        console.log("funciona")

        const res = await fetch("http://localhost:5000/api/Product", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome,
                codigo,
                precoCusto,
                precoVenda,
                estoqueAtual,
                estoqueMinimo
            }),
        });
            console.log("Resposta Status", res.status);
        console.log("Data", data);
        console.log("Body recebido:",  nome,
                codigo,
                precoCusto,
                precoVenda,
                estoqueAtual,
                estoqueMinimo);
    }

    return(
        <>
            <h1>Cadastro de produtos</h1>
        <MainModal onSubmit={salvarProduto}>
            <InputModal
                label="Nome:"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <InputModal
                label="Codigo:"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
            />
            <InputModal
                label="Preço Custo:"
                value={precoCusto}
                onChange={(e) => setPrecoCusto(e.target.value)}
            />
            <InputModal
                label="Preço Venda:"
                value={precoVenda}
                onChange={(e) => setPrecoVenda(e.target.value)}
            />
            <InputModal
                label="Estoque Atual:"
                value={estoqueAtual}
                onChange={(e) => setEstoqueAtual(e.target.value)}
            />
            <InputModal
                label="Estoque Minimo:"
                value={estoqueMinimo}
                onChange={(e) => setEstoqueMinimo(e.target.value)}
            />

            <button type="submit" onClick={() => console.log("Cliquei")}>Cadastra</button>
        </MainModal>
        </>
    )
}