import { useState, useRef, useEffect } from 'react'
import { X } from 'phosphor-react'
import {
  ButtonCloseToast,
  ButtonOpenToast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps {
  title: string
  description: string
}

export function Toast({ title, description }: ToastProps) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  function oneWeekAway() {
    const now = new Date()
    const inOneWeek = now.setDate(now.getDate() + 7)
    return new Date(inOneWeek)
  }

  function handleOpenToast() {
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      eventDateRef.current = oneWeekAway()
      setOpen(true)
    }, 100)
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <>
      <ButtonOpenToast onClick={handleOpenToast}>Open to Toast</ButtonOpenToast>
      <ToastProvider swipeDirection="right">
        <ToastRoot open={open} onOpenChange={setOpen}>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
          <ToastClose asChild>
            <ButtonCloseToast>
              <X color="#A9A9B2" size="20px" weight="fill" />
            </ButtonCloseToast>
          </ToastClose>
        </ToastRoot>
        <ToastViewport />
      </ToastProvider>
    </>
  )
}

Toast.displayName = 'Toast'
