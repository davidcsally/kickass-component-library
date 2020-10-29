import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button`
  border: 2px solid black;
  background-color: transparent;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 3px;
  transition: border-color 150ms, transform 150ms;
  transform: scale(1);
  &:hover,
  &:focus {
    border-color: blue;
    transform: scale(1.1);
  }
`

export const Button: React.FC<ButtonProps> = ({ children, type = 'button' }) => (
  <StyledButton type={type}>
    {children}
  </StyledButton>
)
