import styled from "styled-components";

const StyledInput = styled.input`
  border: 2px solid #adb5bd;
  width: 240px;
  padding: 12px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1.1rem;
  color: #03071e;
  display: block;
  margin-bottom: 8px;

  ::placeholder {
    color: #adb5bd;
    font-weight: 500;
  }

  &:focus {
    outline: none;
    border: 2px solid #3a86ff;
  }
`;

const StyledButton = styled.button`
  background-color: #fb8500;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-weight: 600;
  display: block;
  margin: 8px 0;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 0.9rem;
  margin-top: 8px;
`;

export { StyledInput, StyledButton, ErrorMessage };
