import { act, renderHook } from '@testing-library/react'
import { Mode, applyMode } from '@cloudscape-design/global-styles'

import { MODE_KEY, useMode } from './useMode'

vi.mock('@cloudscape-design/global-styles', async (importOriginal) => {
  const module: typeof applyMode = await importOriginal()

  return {
    ...module,
    applyMode: vi.fn()
  }
})

describe('toggleMode', () => {
  afterEach(() => {
    // Reset vitest mocks
    vi.restoreAllMocks()

    // Reset mode
    localStorage.setItem(MODE_KEY, Mode.Light)
  })

  test('toggling works by default', () => {
    const { result } = renderHook(useMode)

    expect(result.current.isDarkMode).toBeFalsy()

    act(() => {
      result.current.toggleMode()
    })

    expect(result.current.isDarkMode).toBeTruthy()

    act(() => {
      result.current.toggleMode()
    })

    expect(result.current.isDarkMode).toBeFalsy()

    act(() => {
      result.current.toggleMode()
    })

    expect(result.current.isDarkMode).toBeTruthy()
  })

  test('toggling works when localStorage already has a value', () => {
    localStorage.setItem(MODE_KEY, Mode.Dark)

    const { result } = renderHook(useMode)

    expect(result.current.isDarkMode).toBeTruthy()
    
    act(() => {
      result.current.toggleMode()
    })

    expect(result.current.isDarkMode).toBeFalsy()
  })

  test('localStorage is getting set correctly', () => {
    const { result } = renderHook(useMode)

    act(() => {
      result.current.toggleMode()
    })

    expect(localStorage.getItem(MODE_KEY)).toBe(Mode.Dark)
  })

  test('applyMode is getting called correctly', () => {
    const { result } = renderHook(useMode)

    act(() => {
      result.current.toggleMode()
    })

    expect(applyMode).toHaveBeenCalledTimes(2)
    expect(applyMode).toHaveBeenNthCalledWith(1, 'light')
    expect(applyMode).toHaveBeenNthCalledWith(2, 'dark')
  })
})