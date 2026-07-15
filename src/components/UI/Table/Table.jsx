import {StyledTable, StyledTHead, StyledTbody, StyledTr, StyledTh, StyledTd} from "./Style"
import {BtnDelet, BtnEdit} from "../../../utils/Icon"
import {ButtonDeleteLinha, ButtonEditLinha} from "../Button/Button"

export function Table({ columns, data }) {

  async function excluirProduto(id) {

    console.log("ID", id);

    const response = await fetch(
        `http://localhost:5000/api/Product/${id}`,
        {
            method: "DELETE",
        }
    );

    if (response.ok) {
        setProdutos(produtos.filter((p) => p.id !== id));
    }
}
  
  return (
    <StyledTable>
      <StyledTHead>
        <StyledTr>
          {columns.map((column) => (
            <StyledTh key={column.key} className={`col-${column.key}`}>
              {column.label}
              </StyledTh>
          ))}
          <StyledTh>
            <label>Ação</label>
          </StyledTh>
        </StyledTr>
      </StyledTHead>

      <StyledTbody>
        {data.map((item) => (
          <StyledTr key={item.codigo}>
            {columns.map((column) => (
              <StyledTd key={column.key} className={`col-${column.key}`}>
                {item[column.key]}
              </StyledTd>
            ))}

            <StyledTd>
             <ButtonDeleteLinha onClick={() => excluirProduto(item.id)}> {BtnDelet} </ButtonDeleteLinha>
           <ButtonEditLinha>{BtnEdit}</ButtonEditLinha>
            </StyledTd>
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
}