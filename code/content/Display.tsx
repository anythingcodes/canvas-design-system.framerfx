import * as React from "react"
import * as System from "baseui/typography"
import { addPropertyControls } from "framer"
import { withHOC } from "../withHOC"
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls"

const InnerDisplay: React.SFC<any> = ({ text, ["children"]: _, willChangeTransform: __, ...props }) => {
  return <System.Display {...props}>{text}</System.Display>
}

export const Display = withHOC(InnerDisplay)

Display.defaultProps = {
  width: 480,
  height: 115,
}

addPropertyControls(Display, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
})
