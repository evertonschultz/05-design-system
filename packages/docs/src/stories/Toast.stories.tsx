import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@es-ignite-ui/react'

export default {
  title: 'Info/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
