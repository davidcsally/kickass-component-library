import React from 'react'
import styled from 'styled-components'

type ButtonType = 'primary' | 'secondary' | 'tertiary'

export interface ButtonProps {
  /** Button Copy / Text */
  children: React.ReactNode;
  /** Specifies preset button style */
  buttonType: ButtonType,
  /** (optional) Specifies button type (button, submit, or reset). Defaults to `button` */
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<{ buttonType: ButtonType }>`
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

/**
 * Pretty cool `Button` component!
 */
export const Button: React.FC<ButtonProps> = ({ children, type = 'button', buttonType = 'primary' }) => (
  <StyledButton type={type} buttonType={buttonType}>
    {children}
  </StyledButton>
)
