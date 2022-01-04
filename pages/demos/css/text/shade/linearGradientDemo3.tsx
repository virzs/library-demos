/*
 * @Author: Vir
 * @Date: 2022-01-03 14:18:14
 * @Last Modified by: Vir
 * @Last Modified time: 2022-01-03 14:56:22
 */

import { css, cx, keyframes } from '@emotion/css'
import React from 'react'

const LinearGradientDemo3: React.FC = () => {
  const frames = keyframes`
  from {
    background-position: -500%;
  }
  to {
    background-position: 500%;
  }
`
  const bg = css`
    background: linear-gradient(90deg, #e66465 0%, #9198e5 50%, #e66465 100%);
    padding: 2em;
    background-size: 200%;
    animation: ${frames} 3s linear infinite;
  `
  return <div className={cx(bg)}></div>
}

export default LinearGradientDemo3
