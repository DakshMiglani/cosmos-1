import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, fonts, spacing, misc } from '../../tokens/'

const config = {
  basic: {
    background: colors.input.background,
    border: colors.input.border,
    hoverBorder: colors.input.borderHover,
    focusBorder: colors.input.borderFocus,
    placeholder: colors.input.placeholder
  },
  readOnly: {
    background: colors.input.backgroundReadOnly,
    border: colors.input.border,
    hoverBorder: colors.input.border,
    focusBorder: colors.input.border,
    placeholder: colors.input.placeholderReadOnly
  },
  error: {
    background: colors.input.background,
    border: colors.input.borderError,
    hoverBorder: colors.input.borderError,
    focusBorder: colors.input.borderError
  }
}

const getAttributes = props => {
  if (props.readOnly) return config.readOnly
  else if (props.error) return config.error
  else return config.basic
}

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;

  background: ${props => getAttributes(props).background};
  border: 1px solid;
  border-color: ${props => getAttributes(props).border};
  border-radius: ${misc.radius};

  font-family: ${props => (props.code ? fonts.family.code : 'inherit')};
  color: ${colors.input.text};

  padding: ${spacing.xsmall} ${spacing.small};

  cursor: ${props => (props.readOnly ? 'not-allowed' : 'auto')};
  transition: border-color ${misc.animationDuration},
    box-shadow ${misc.animationDuration};

  &:hover {
    border-color: ${props => getAttributes(props).hoverBorder};
  }
  &:focus {
    border-color: ${props => getAttributes(props).focusBorder};
    box-shadow: 0px 0px 0 1px ${props => getAttributes(props).focusBorder};
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: ${props => getAttributes(props).placeholder};
  }
`

const Input = props => <StyledInput {...props} />

Input.propTypes = {
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Use when the expected input is code */
  code: PropTypes.bool,
  /** Pass error string directly to show error state */
  error: PropTypes.string
}

Input.defaultProps = {
  readOnly: false,
  code: false,
  error: null
}

export default Input
export { StyledInput }
