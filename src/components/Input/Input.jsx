import styled from "styled-components";

const Input = styled.input`
  font-size: 1.6rem;
  border-radius: 0.5rem;
  border: 2px solid var(--n-c-light-grayish-violet);
  width: 100%;
  padding: 1rem;
  font-size: var(--font-space-grotesk);
  outline: none;
  &::placeholder {
    color: var(--n-c-dark-grayish-violet);
  }
`;

export { Input };
