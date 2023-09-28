import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 128,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:disabled': {
          backgroundColor: '$gray200',
        },

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },
      },
      secundary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:disabled': {
          color: '$gray600',
        },

        '&:not(:disabled):hover': {
          color: '$white',
        },
      },
    },

    size: {
      sm: {
        padding: '0 $4',
        height: 38,
      },
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}
