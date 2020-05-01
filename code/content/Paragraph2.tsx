import * as React from "react"
import * as System from "baseui/typography"
import { addPropertyControls } from "framer"
import { withHOC } from "../withHOC"
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls"

const InnerParagraph2: React.SFC<any> = ({ text, ["children"]: _, willChangeTransform: __, ...props }) => {
  return <System.Paragraph2 {...props}>{text}</System.Paragraph2>
}

export const Paragraph2 = withHOC(InnerParagraph2)

Paragraph2.defaultProps = {
  width: 86,
  height: 38,
}

addPropertyControls(Paragraph2, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
})
