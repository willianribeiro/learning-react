import React from 'react'
import { Counter } from './Counter'
import { storiesOf, action } from '@kadira/storybook'

const stories = storiesOf('Counter', module)

stories.add('Counter', () => (
  <Counter counter={10} increment={action('increment')} decrement={action('decrement')} />
))
