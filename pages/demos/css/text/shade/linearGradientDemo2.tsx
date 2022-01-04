/*
 * @Author: Vir
 * @Date: 2022-01-03 14:18:14
 * @Last Modified by: Vir
 * @Last Modified time: 2022-01-03 14:56:15
 */

import { css, cx } from '@emotion/css'
import React from 'react'

const LinearGradientDemo2: React.FC = () => {
  const bg = css`
    background: linear-gradient(90deg, #e66465, #9198e5, #e66465);
    padding: 2em;
  `
  return <div className={cx(bg)}></div>
}

export default LinearGradientDemo2
