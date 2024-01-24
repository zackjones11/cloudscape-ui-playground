import { Mode, applyMode } from '@cloudscape-design/global-styles'

import { useState, useEffect, useCallback } from 'react'

export const MODE_KEY = 'mode'

export const useMode = () => {
  const [mode, setMode] = useState(localStorage.getItem('mode') as Mode)

  const toggleMode = useCallback(() => {
    const nextMode = mode === Mode.Dark ? Mode.Light : Mode.Dark

    localStorage.setItem(MODE_KEY, nextMode)
    setMode(nextMode)
  }, [mode])

  useEffect(() => {
    applyMode(mode)
  }, [mode])
  
  return { mode, isDarkMode: mode === Mode.Dark, toggleMode }
}