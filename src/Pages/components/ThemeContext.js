import React from 'react'

const getInitiolTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = windows.localStorage.getItem('current-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
  }
  return 'light'
}

export const ThemeProvder = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitiolTheme)

  const checkTheme = (existing) => {
    const root = window.document.documentElement
    const inDark = existing === 'dark'
    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(existing)

    localStorage.setItem('current-theme', existing)

    if (initialTheme) {
      checkTheme(initialTheme)
    }

    React.useEffect(() => {
      checkTheme(initialTheme)
    }, [theme])
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    )
  }
}

export const ThemeContext = React.createContext()
