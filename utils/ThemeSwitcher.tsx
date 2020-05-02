import * as React from "react"
import { addPropertyControls, ControlType, Frame } from "framer"
import { setTheme } from "./ThemeManagement"

interface ThemeProps {
  theme: any
  children: any
}

export const ThemeSwitcher: React.SFC = (props: ThemeProps) => {
  React.useEffect(() => {
    setTheme(props.theme)
  }, [props.theme])

  return (
    <Frame background={"transparent"} width={"100%"} height={"100%"}>
      Current Theme: {props.theme}
    </Frame>
  )
}

ThemeSwitcher.defaultProps = {
  width: 110,
  height: 25,
}

addPropertyControls(ThemeSwitcher, {
  theme: {
    title: "Theme",
    options: ["dark", "light"],
    optionTitles: ["Dark", "Light"],
    type: ControlType.Enum,
    defaultValue: "dark",
  },
})
