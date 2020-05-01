import * as React from "react"
import * as System from "baseui/typography"
import { addPropertyControls } from "framer"
import { withHOC } from "../withHOC"
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls"

const InnerParagraph1: React.SFC<any> = ({ text, ["children"]: _, willChangeTransform: __, ...props }) => {
  return <System.Paragraph1 {...props}>{text}</System.Paragraph1>
}

export const Paragraph1 = withHOC(InnerParagraph1)

Paragraph1.defaultProps = {
  width: 75,
  height: 33,
}

addPropertyControls(Paragraph1, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
})
