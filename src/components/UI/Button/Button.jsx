import { StyledButton, StyledButtonDelete, StyledButtonEdit } from "./Styles"

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