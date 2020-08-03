import React from 'react'
import { text } from '@storybook/addon-knobs'

import { Button } from '.'

export default {
  component: Button,
  title: 'Button',
}

export const all = () => (
  <Button buttonType="primary">
    {text('Button Copy', 'Cool Button 😎')}
  </Button>
)
