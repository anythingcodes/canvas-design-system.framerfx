import * as React from "react"
import * as System from "baseui/typography"
import { addPropertyControls } from "framer"
import { withHOC } from "../withHOC"
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls"

const InnerCaption2: React.SFC<any> = ({ text, ["children"]: _, willChangeTransform: __, ...props }) => {
  return <System.Caption2 {...props}>{text}</System.Caption2>
}

export const Caption2 = withHOC(InnerCaption2)

Caption2.defaultProps = {
  width: 85,
  height: 20,
}

addPropertyControls(Caption2, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
})
