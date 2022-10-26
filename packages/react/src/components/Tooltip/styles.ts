import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  background: '$gray600',
  variants: {
    available: {
      false: {
        backgroundColor: '$gray800',
      },
    },
  },

  minHeight: '52px',
  minWidth: '60px',

  padding: '$4 $5',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '6px',

  border: 0,

  span: {
    fontFamily: '$default',
    fontSize: '$md',
    color: '$gray100',
  },
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  padding: '$3 $4',
  borderRadius: '5px',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
