import { StyledButton, StyledButtonDelete, StyledButtonEdit, StyledButtonCadProduto } from "./Styles"

export function ButtonBuscar ({children, ...props}){
    return(
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export function ButtonDeleteLinha ({children, ...props}){
    return(
        <StyledButtonDelete {...props}>
           {children}
        </StyledButtonDelete>
    )
}

export function ButtonEditLinha ({children, ...props}){
    return(
       <StyledButtonEdit {...props}>
        {children}
       </StyledButtonEdit>
    )
}

export function ButtonCadProduto ({children, ...props}){
    return(
        <StyledButtonCadProduto {...props}>
            {children}
        </StyledButtonCadProduto>
    )
}