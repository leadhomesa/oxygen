import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { checkA11y } from '@storybook/addon-a11y'
import { Card, CardTitle, CardCopy, Button } from '../../build/realib.cjs'

addDecorator(checkA11y)

storiesOf('Card', module)
  .add('default', () => (
    <Card centerContent>
      This is the Card component with no additional styling.
    </Card>
  ))
  .add('With themed title & copy', () => (
    <Card>
      <CardTitle>Card</CardTitle>
      <CardCopy>
        This is the standard card text in a CardCopy component.
      </CardCopy>
    </Card>
  ))

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Login</Button>)
  .add('With i18n violations', () => (
    <Button onClick={action('clicked')} style={{ backgroundColor: 'gray' }}>Send</Button>
  ))
