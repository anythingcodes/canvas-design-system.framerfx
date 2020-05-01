import * as React from "react"
import * as System from "baseui/heading"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "../generated/Heading"
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls"
import { withHOC } from "../withHOC"

const InnerHeading: React.SFC<any> = ({ text, ["children"]: _, willChangeTransform: __, ...props }) => {
  return (
    <System.HeadingLevel>
      <System.Heading {...props}>{text}</System.Heading>
    </System.HeadingLevel>
  )
}

export const Heading = withHOC(InnerHeading)

Heading.defaultProps = {
  width: 360,
  height: 136,
}

addPropertyControls(Heading, {
  styleLevel: merge(controls.styleLevel, {
    min: 1,
    max: 6,
    displayStepper: true,
  }),
  ...TextPropertyControl,
  ...ColorPropertyControl,
})
