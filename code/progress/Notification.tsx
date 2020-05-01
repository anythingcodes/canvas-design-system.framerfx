import * as System from "baseui/notification"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/Notification"
import { withHOC } from "../withHOC"

const InnerNotification: React.SFC<any> = ({ title, message, ...props }) => {
  return (
    <System.Notification {...props}>
      <b>{title}</b> {message}
    </System.Notification>
  )
}

export const Notification = withHOC(InnerNotification)

Notification.defaultProps = {
  width: 290,
  height: 90,
}

addPropertyControls(Notification, {
  title: { type: ControlType.String, defaultValue: "Title!" },
  message: { type: ControlType.String, defaultValue: "You're being notified of something important" },
  closeable: merge(controls.closeable, {}),
  kind: merge(controls.kind, {}),
  notificationType: merge(controls.notificationType, {}),
})
