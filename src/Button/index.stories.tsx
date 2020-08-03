import React from 'react'
import { Button } from '.'

export default {
  component: Button,
  title: 'Button',
}

export const all = () => (
  <Button buttonType="primary">
    Cool Button <span aria-label="cool emoji" role="img">😎</span>
  </Button>
)
