/*
 * @Author: Vir
 * @Date: 2022-01-03 14:18:14
 * @Last Modified by: Vir
 * @Last Modified time: 2022-01-03 15:01:33
 */

import { css, cx, keyframes } from '@emotion/css'
import React from 'react'

const LinearGradientDemo5: React.FC = () => {
  const frames = keyframes`
  from {
    background-position: -500%;
  }
  to {
    background-position: 500%;
  }
`
  const bg = css`
    background: linear-gradient(90deg, #000 0%, #fff 50%, #000 100%);
    background-size: 80%;
    animation: ${frames} 6s linear infinite;
    background-clip: text;
    background-repeat: no-repeat;
    color: transparent;
    font-size: 2em;
  `
  const box = css`
    background: black;
    padding: 2em;
  `
  return (
    <div className={box}>
      <div className={cx(bg)}>
        测试用文字测试用文字测试用文字测试用文字测试用文字
      </div>
    </div>
  )
}

export default LinearGradientDemo5
