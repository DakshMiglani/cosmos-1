import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing, fonts, misc } from '../../tokens/'
import onlyOneOf from '../_helpers/only-one-of-validator'
import { substract } from '../_helpers/pixel-calc'
import Icon from './icon'
import Spinner from './spinner'

const config = {
  default: {
    text: colors.button.defaultText,
    background: colors.button.defaultBackground,
    border: colors.button.defaultBorder,
    hoverBackground: colors.button.defaultBackgroundHover,
    hoverBorder: colors.button.defaultBorderHover,
    focusBackground: colors.button.defaultBackgroundFocus,
    focusBorder: colors.button.defaultBorderFocus
  },
  primary: {
    text: colors.button.primaryText,
    background: colors.button.primaryBackground,
    border: colors.button.primaryBorder,
    hoverBackground: colors.button.primaryBackgroundHover,
    hoverBorder: colors.button.primaryBorderHover,
    focusBackground: colors.button.primaryBackgroundFocus,
    focusBorder: colors.button.primaryBorderFocus
  },
  transparent: {
    text: colors.button.transparentText,
    background: colors.button.transparentBackground,
    border: colors.button.transparentBorder,
    hoverBackground: colors.button.transparentBackgroundHover,
    hoverBorder: colors.button.transparentBorderHover,
    focusBackground: colors.button.transparentBackgroundFocus,
    focusBorder: colors.button.transparentBorderFocus
  },
  link: {
    text: colors.button.link,
    background: 'transparent',
    border: 'transparent',
    hoverText: colors.button.linkHover,
    hoverBackground: 'transparent',
    hoverBorder: 'transparent',
    focusText: colors.button.linkFocus,
    focusBackground: 'transparent',
    focusBorder: 'transparent'
  },
  disabled: {
    text: colors.button.grayMedium,
    background: colors.button.grayLightest,
    border: colors.button.grayLightest,
    hoverBackground: colors.button.grayLightest,
    hoverBorder: colors.button.grayLightest,
    focusBackground: colors.button.grayLightest,
    focusBorder: colors.button.grayLightest
  },
  destructive: {
    text: colors.button.destructiveText,
    background: colors.button.destructiveBackground,
    border: colors.button.destructiveBorder,
    hoverBackground: colors.button.destructiveBackgroundHover,
    hoverBorder: colors.button.destructiveBorderHover,
    focusBackground: colors.button.destructiveBackgroundFocus,
    focusBorder: colors.button.destructiveBorderFocus
  },
  loading: {
    text: colors.button.white,
    background: colors.button.green,
    border: colors.button.green,
    hoverBackground: colors.button.green,
    hoverBorder: colors.button.green,
    focusBackground: colors.button.green,
    focusBorder: colors.button.green
  },
  success: {
    text: colors.button.successText,
    background: colors.button.successBackground,
    border: colors.button.successBorder,
    hoverBackground: colors.button.successBackgroundHover,
    hoverBorder: colors.button.successBorderHover,
    focusBackground: colors.button.successBackgroundFocus,
    focusBorder: colors.button.successBorderFocus
  }
}

const getAttributes = props => {
  let styles = null
  if (props.success) styles = config.success
  else if (props.primary) styles = config.primary
  else if (props.transparent) styles = config.transparent
  else if (props.link) styles = config.link
  else if (props.destructive) styles = config.destructive
  else if (props.disabled) styles = config.disabled
  else styles = config.default

  if (props.loading) {
    styles.background = styles.hoverBackground
    styles.focusBackground = styles.hoverBackground
    styles.border = styles.hoverBorder
    styles.focusBorder = styles.hoverBorder
  }

  return styles
}

const StyledButton = styled.button`
  min-width: ${props => (props.icon ? '36px' : '96px')};
  box-sizing: border-box;

  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: ${fonts.weight.bold};

  background: ${props => getAttributes(props).background};
  border: 1px solid;
  border-color: ${props => getAttributes(props).border};
  border-radius: ${misc.radius};

  color: ${props => getAttributes(props).text};

  margin: ${spacing.xsmall};
  margin-left: 0;
  padding: ${spacing.xsmall} ${props => (props.icon ? 0 : spacing.small)};

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: border-color ${misc.animationDuration},
    background ${misc.animationDuration};

  &:hover {
    color: ${props =>
      getAttributes(props).hoverText || getAttributes(props).text};
    background: ${props => getAttributes(props).hoverBackground};
    border-color: ${props => getAttributes(props).hoverBorder};
  }
  &:focus {
    background: ${props => getAttributes(props).focusBackground};
    border-color: ${props => getAttributes(props).focusBorder};
    outline: none;
  }
`

const Button = ({ children, ...props }) => {
  let content = children
  if (props.success) content = <Icon type="success" />
  else if (props.loading) content = <Spinner inverse={props.primary} />

  if (props.icon) {
    return (
      <StyledButton {...props}>
        <Icon type={props.icon} />
      </StyledButton>
    )
  } else {
    return <StyledButton {...props}>{content}</StyledButton>
  }
}

Button.propTypes = {
  /** Use for primary call to action */
  primary: PropTypes.bool,
  /** Use for secondary call to action */
  transparent: PropTypes.bool,
  /** Disable button that does not validate constraint */
  disabled: PropTypes.bool,
  /** Use for destructive actions like delete */
  destructive: PropTypes.bool,
  /** Use for subtle actions */
  link: PropTypes.bool,

  /** Name of icon */
  icon: PropTypes.string,

  /** Loading state when waiting for an action to complete */
  loading: PropTypes.bool,
  /** Successful state when action is completed successfuly */
  success: PropTypes.bool,

  /** @ignore This is an internal prop only used for validation */
  _type: props =>
    onlyOneOf(props, [
      'primary',
      'transparent',
      'disabled',
      'destructive',
      'link'
    ])
}

Button.defaultProps = {
  primary: false,
  transparent: false,
  destructive: false,
  link: false,
  icon: null,
  disabled: false,
  loading: false,
  success: false
}

export default Button
export { StyledButton }
