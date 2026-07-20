import { StyledInput, StyledInputModal, Container, Label, LabelModal } from "./styles";

export function InputBusca({
  label,
  ...props
}) {
  return (
    <Container>
      {label && <Label>{label}</Label>}

      <StyledInput {...props} />
    </Container>
  );
}

export function InputModal ({
  label, 
  ...props
}){
  return(
    <>
    {label && <LabelModal>{label}</LabelModal>}

      <StyledInputModal {...props}/>
    </>
  )
}