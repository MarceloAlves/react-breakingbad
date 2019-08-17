import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BreakingBad } from '../src'

describe('<BreakingBad />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BreakingBad>Text</BreakingBad>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
