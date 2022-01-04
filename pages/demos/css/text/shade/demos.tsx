/*
 * @Author: Vir
 * @Date: 2022-01-02 18:14:58
 * @Last Modified by: Vir
 * @Last Modified time: 2022-01-02 19:37:02
 */

import { css, cx } from '@emotion/css'
import React from 'react'

export const BackgroundClipDemo: React.FC = () => {
  const bg = css`
    background: linear-gradient(60deg, red, yellow, red, yellow, red);
    padding: 0.4em 1em;
    display: inline-block;
  `
  const text = css`
    background-clip: text;
    color: transparent;
    padding: 0;
  `
  const title = css`
    font-weight: bold;
  `

  return (
    <div>
      <p className={cx(title)}>Normal</p>
      <div className={bg}>正常情况下的背景</div>
      <p className={cx(title)}>Text</p>
      <div className={cx(bg, text)}>
        设置了<code>background-clip: text</code>的背景
      </div>
    </div>
  )
}
