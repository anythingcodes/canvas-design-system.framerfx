import * as System from "baseui/typography"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls"

const InnerH1: React.SFC<any> = ({ text, ["children"]: _, willChangeTransform: __, ...props }) => {
  return <System.H1 {...props}>{text}</System.H1>
}

export const H1 = withHOC(InnerH1)

H1.defaultProps = {
  width: 360,
  height: 135,
}

addPropertyControls(H1, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
})
