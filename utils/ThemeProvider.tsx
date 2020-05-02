import * as React from "react"
import { Provider as StyletronProvider } from "styletron-react"
import { LightTheme, BaseProvider, styled, DarkTheme } from "baseui"
import { engine } from "./StyletronEngine"

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

export const ThemeProvider = props => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={themes[props.theme] || LightTheme}>{props.children}</BaseProvider>
    </StyletronProvider>
  )
}
