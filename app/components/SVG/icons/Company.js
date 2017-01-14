import React from 'react'
import Icon from 'components/Icon'

export const CompanyIcon = ({ className, ...rest }) => {
  return (
    <Icon
      {...rest}
      className={className}
      viewBox='0 0 24 24'>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
    </Icon>
  )
}

export default CompanyIcon