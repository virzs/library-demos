import React from 'react'
import { createTheme, defaultSideNavs } from 'vite-pages-theme-doc'

export default createTheme({
  logo: <div style={{ marginLeft: 40, fontWeight: 'bold' }}>首页</div>,
  logoLink: '/',
  topNavs: [
    { label: '案例', path: '/demos', activeIfMatch: '/demos' },
    // { label: 'Users', path: '/users', activeIfMatch: '/users' },
    // {
    //   label: 'Guide',
    //   path: '/guide/introduce',
    //   activeIfMatch: '/guide',
    // },
    // {
    //   label: 'Reference',
    //   path: '/reference/glossary',
    //   activeIfMatch: '/reference',
    // },
    {
      label: 'Github',
      href: 'https://github.com/virzs/library-demos',
    },
  ],
  sideNavs: (ctx) => {
    return location.pathname === '/'
      ? null
      : defaultSideNavs(ctx, {
          groupConfig: {
            reference: {
              concepts: {
                label: 'Concepts',
                order: 1,
              },
              'cli-commands': {
                label: 'CLI Commands',
                order: 2,
              },
              'error-codes': {
                label: 'Error Codes',
                order: 3,
              },
            },
          },
        })
  },
})
