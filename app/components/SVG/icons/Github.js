import React from 'react'
import Icon from 'components/Icon'

export const GithubIcon = ({ className, ...rest }) => {
  return (
    <Icon
      {...rest}
      className={className}
      viewBox='5 5 40 40'>
      <g>
        <path className={className} d="M21,41v-5.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V41h2v-6.5c0-0.276,0.224-0.5,0.5-0.5   s0.5,0.224,0.5,0.5V41h2v-5.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V41h1.758C29.914,40.725,30,40.373,30,39.921v-3.942    c0-2.161-1.91-5.231-4.251-5.231H23.25c-2.34,0-4.25,3.071-4.25,5.231v3.942c0,0.452,0.086,0.804,0.241,1.079H21z"></path>
        <path className={className} d="M14.174,23.46c0-4.416,4.619-8.46,10.326-8.46c5.697,0,10.326,4.042,10.326,8.46   c0,4.419-3.313,7.54-10.326,7.54C17.488,31,14.174,27.879,14.174,23.46z"></path>
        <path className={className} d="M28.586,16.311c0,0,1.677-2.312,4.77-2.312c1.232,1.231,0.385,4.76-0.018,5.819L28.586,16.311z"></path>
        <path className={className} d="M20.403,16.312c0,0-1.677-2.312-4.758-2.312c-1.231,1.233-0.396,4.76,0.006,5.819L20.403,16.312z"></path>
        <path className={className} d="M20.106,35.863c0,0-2.349,0-2.79,0c-1.22,0-2.3-0.534-2.823-1.505c-0.587-1.079-1.14-2.3-2.585-3.309   c-0.255-0.179-0.108-0.438,0.393-0.38c0.489,0.051,1.416,0.159,2.126,1.088c0.708,0.93,1.481,1.997,2.81,1.997    c1.316,0,2.747,0.035,3.468-0.918L20.106,35.863z"></path>
      </g>
      <path className={className} d="M24,5C13.504,5,5,13.504,5,24s8.504,19,19,19s19-8.504,19-19S34.496,5,24,5z M24,40.033  c-8.838,0-16.033-7.195-16.033-16.033S15.162,7.967,24,7.967S40.033,15.162,40.033,24S32.838,40.033,24,40.033z"></path>
    </Icon>
  )
}

export default GithubIcon