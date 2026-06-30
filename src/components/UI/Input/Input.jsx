import { StyledInput, Container, Label } from "./styles";

export function Input({
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