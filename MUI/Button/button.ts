import * as React from 'react'
import { Button as MUIButton, ButtonProps, css, styled } from '@mui/material'

export type ButtonType = ButtonProps &
  React.PropsWithChildren & {
    baseUi: 'primary' | 'secondary' | 'tertiary' | 'normal'
  }

export const BaseButton = styled(MUIButton, {
  shouldForwardProp: (prop) => prop !== 'baseUi',
})<ButtonType>(({ theme, baseUi }) => ({
  fontSize: '14px',
  borderRadius: '25px',
  padding: '10px 20px',
  gap: '10px',
  color: '#333333',
  fontFamily: 'var(--font-noto-sans-jp), sans-serif',
  alignContent: 'center',
  justifyContent: 'space-around',
  ...(baseUi === 'primary' && {
    backgroundColor: theme.palette.primary.main, // テーマの primary カラー
    color: theme.palette.common.white,
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  }),
  ...(baseUi === 'secondary' && {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.dark,
    border: `1px solid ${theme.palette.secondary.dark}`,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.secondary.dark,
      border: `1px solid ${theme.palette.secondary.dark}`,
    },
  }),
}))