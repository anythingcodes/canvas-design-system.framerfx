import * as System from "baseui/toast"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/Toast"
import { withHOC } from "../withHOC"

const InnerToast: React.SFC<any> = ({ text, ...props }) => {
  return <System.Toast {...props}>{text}</System.Toast>
}

export const Toast = withHOC(InnerToast)

Toast.defaultProps = {
  width: 290,
  height: 68,
}

addPropertyControls(Toast, {
  autoHideDuration: {
    type: ControlType.Number,
    defaultValue: 0,
    min: 0,
    max: 100,
  },
  text: {
    type: ControlType.String,
    defaultValue: "Warning! Something happened!",
  },
  closeable: merge(controls.closeable, { defaultValue: true }),
  kind: merge(controls.kind, { defaultValue: System.KIND.info }),
})
