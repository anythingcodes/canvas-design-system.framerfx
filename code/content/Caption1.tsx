import * as React from "react"
import * as System from "baseui/typography"
import { addPropertyControls } from "framer"
import { withHOC } from "../withHOC"
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls"

const InnerCaption1: React.SFC<any> = ({ text, ["children"]: _, willChangeTransform: __, ...props }) => {
  return <System.Caption1 {...props}>{text}</System.Caption1>
}

export const Caption1 = withHOC(InnerCaption1)

Caption1.defaultProps = {
  width: 85,
  height: 20,
}

addPropertyControls(Caption1, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
})
