let globalTheme = "light"

type Listener = (theme: string) => void
const listeners = new Set<Listener>()

function notifyListeners() {
  for (const listener of listeners) {
    listener(globalTheme)
  }
}

export function setTheme(theme: string) {
  globalTheme = theme
  notifyListeners()
}

export function getCurrentTheme() {
  return globalTheme
}

// Called as part of a React.useEffect
export function addListener(onThemeChange: Listener) {
  listeners.add(onThemeChange)

  if (!!globalTheme) {
    notifyListeners()
  }

  // Clean up the listener
  return () => {
    listeners.delete(onThemeChange)
  }
}
