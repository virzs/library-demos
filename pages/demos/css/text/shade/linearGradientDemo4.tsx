/*
 * @Author: Vir
 * @Date: 2022-01-03 14:18:14
 * @Last Modified by: Vir
 * @Last Modified time: 2022-01-03 19:05:45
 */

import { css, cx, keyframes } from '@emotion/css'
import React from 'react'

const LinearGradientDemo4: React.FC = () => {
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
    background-size: 80%;
    animation: ${frames} 6s linear infinite;
    background-clip: text;
    color: transparent;background-repeat: no-repeat;
  `
  return <div className={cx(bg)}>测试用文字</div>
}

export default LinearGradientDemo4
