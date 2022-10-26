import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@es-ignite-ui/react'

export default {
  title: 'Info/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '$5',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    content: '26',
    description: '26 de Outubro - Disponível',
    available: true,
  },
}

export const Secundary: StoryObj<TooltipProps> = {
  args: {
    content: '25',
    description: '25 de Outubro - Indisponível',
    available: false,
  },
}
