import * as System from "baseui/spinner"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"

const InnerSpinner: React.SFC<any> = ({ width, height, ...props }) => {
  return <System.Spinner color={props.color} size={Math.min(width, height) + "px"} />
}

export const Spinner = withHOC(InnerSpinner)

Spinner.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(Spinner, {
  color: { type: ControlType.Color },
})
