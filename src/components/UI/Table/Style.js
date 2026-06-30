import styled from "styled-components";

export const StyledTable = styled.table`
    border: 1px solid red;
`
export const StyledTh = styled.th`
    padding: 10px;
    border: 1px solid orange;
    width: 30%;
`

export const StyledTHead = styled.thead`
    border: 1px solid green;
`
export const StyledTbody = styled.tbody`
    border: 1px solid blue;
`
export const StyledTr = styled.tr`
    border: 1px solid red;
`

export const StyledTd = styled.td`
    border: 1px solid black;
    text-align: center;

    &.col-codigo{ //estilizando por cada coluna da tabela
        //text-align: right;
    }

    &.col-estoqueAtual{
       // text-align: center;
    }
`