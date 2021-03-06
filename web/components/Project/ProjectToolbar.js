import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'

import Toolbar, {IconLink} from '../Toolbar'
import Tabs from '../Tabs'

import colorize from '../../core/color'
import {tabTo} from '../../ducks/app'

const Left = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 1em;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 1em;
  }
`

const Separator = styled.div`
  height: 1.78em;
  width: 1px;
  background: #f5f5f5;
  margin-right: ${props => props.margin || 0.5}em;
  margin-left: ${props => props.margin || 0.5}em;
  opacity: 0.75;
`

export const Title = styled.div`
  display: flex;
  align-items: center;

  padding-left: 0.6em;
  font-size: 1.15em;

  @media screen and (max-width: 700px) {
    font-size: 1em;
    padding-left: 0;
    overflow: hidden;
  }
`

const Desktop = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`

const MobileTab = styled.div`
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.16);

  @media screen and (min-width: 700px) {
    display: none;
  }
`

const tabs = [
  'Overview',
  'Services',
  'Devices'
]

const ProjectToolbar = ({name, color, tab, tabTo}) => (
  <div>
    <Toolbar
      color={color || colorize(name)}
      left={
        <Left>
          <IconLink href='/dashboard' icon='dashboard' />
          <Separator />
          <Title min={6}>{name}</Title>
        </Left>
      }
      right={
        <Right>
          <Desktop>
            <Tabs tabs={tabs} tab={tab} go={tabTo} />
          </Desktop>
          <Separator />
          <IconLink href='/dashboard' icon='notifications' />
          <IconLink href='/dashboard' icon='settings' />
        </Right>
      }
    />
    <MobileTab>
      <Tabs tabs={tabs} tab={tab} go={tabTo} color='hsl(264, 46%, 41%)' />
    </MobileTab>
  </div>
)

function selectColor(svc, name) {
  const service = svc.filter(x => x.id === name)[0]

  if (service) {
    return service.color
  }

  return null
}

const mapStateToProps = (state, props) => ({
  tab: state.app.tab,
  color: selectColor(state.app.services, props.name)
})

export default connect(mapStateToProps, {tabTo})(ProjectToolbar)
