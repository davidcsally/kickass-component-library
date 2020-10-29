import React from 'react'
// import { text } from '@storybook/addon-knobs'

import { Button } from '.'

export default {
  component: Button,
  title: 'Components/Button',
}

export const all = () => (
  <Button buttonType="primary">
    Cool Button
  </Button>
)
