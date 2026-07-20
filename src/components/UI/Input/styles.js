import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
 `

export const StyledInput = styled.input`
  padding: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-left: 10px;
`;

export const StyledInputModal = styled.input`
    width: 231px;
    height: 20px;
    border-radius: 5px;
    border: 3px solid white;
    background: none;
    color: white;
`;

export const LabelModal = styled.label`
   font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
`