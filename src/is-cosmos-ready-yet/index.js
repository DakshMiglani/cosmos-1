import React from 'react'
import styled from 'styled-components'

import { Heading1, Logo } from '../components'
import Center from '../components/_helpers/center'

/* Get sources from the file generated by tooling/find-imports */
import sources from './sources.json'

const Node = styled.span`
  margin: 10px;
  g {
    fill: ${props => (props.pass ? 'normal' : 'grey')};
  }
`

/* Create an array of nodes with pass or fail status */
const nodes = []
for (let i = 0; i < sources['../components']; i++) nodes.push({ pass: true })
for (let i = 0; i < sources['./dummy-components']; i++) nodes.push({ pass: false })

export default () => (
  <Center>
    <Heading1>Milestone 1: Manage PoC</Heading1>
    <div>
      {nodes.map((node, index) => (
        <Node key={index} pass={node.pass}>
          <Logo />
        </Node>
      ))}
    </div>
  </Center>
)
