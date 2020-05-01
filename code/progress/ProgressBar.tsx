import * as System from "baseui/progress-bar"
import { addPropertyControls } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/ProgressBar"
import { withHOC } from "../withHOC"

const InnerProgressBar: React.SFC = props => {
  return <System.ProgressBar {...props} />
}

export const ProgressBar = withHOC(InnerProgressBar)

ProgressBar.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(ProgressBar, {
  value: merge(controls.value, { defaultValue: 20 }),
  showLabel: merge(controls.showLabel, { defaultValue: true }),
})
