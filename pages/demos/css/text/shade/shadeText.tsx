/*
 * @Author: Vir
 * @Date: 2022-01-01 22:14:50
 * @Last Modified by: Vir
 * @Last Modified time: 2022-01-02 02:06:42
 */

import { css, keyframes } from '@emotion/css'
import React from 'react'

const frames = keyframes`
  from {
    background-position: -500%;
  }
  to {
    background-position: 500%;
  }
`

const textCss = css`
  display: inline-block;
  font-size: 2em;
  font-family: Lato, sans-serif;
  letter-spacing: 4px;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: 80%;
  background-repeat: no-repeat;
  color: transparent;
  background-clip: text;
  animation: ${frames} 3s linear infinite;
`

const box = css`
  display: flex;
  height: 160px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: black;
`

const ShadeText: React.FC = () => {
  return (
    <div className={box}>
      <p className={textCss}>SHADE TEXT</p>
    </div>
  )
}

export default ShadeText
