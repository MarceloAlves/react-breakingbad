import React from 'react'
import { elements, replaceAt } from './utils'

export interface BreakingBadProps {}

export const BreakingBad = ({ children }: { children: string }) => {
  const regex = new RegExp(elements.join('|'), 'i')
  const match = children!.match(regex)

  if (match && match.index) {
    const replacement = replaceAt(children, match.index, match[0])
    return <div className="react-breakingbad">{replacement}</div>
  } else {
    return children
  }
}
