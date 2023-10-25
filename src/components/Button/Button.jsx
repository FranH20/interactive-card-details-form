import styled from "styled-components";

const Button = styled.button`
  background-color: var(--n-c-very-dark-violet);
  color: var(--n-c-white);
  padding: 1rem 0;
  width: 100%;
  text-transform: capitalize;
  border-radius: 0.5rem;
  font-size: var(--button-font-size);
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: var(--n-c-dark-grayish-violet);
  }
`;

export { Button };
