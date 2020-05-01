import * as System from "baseui/avatar"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/Avatar"
import { withHOC } from "../withHOC"

const InnerAvatar: React.SFC<any> = ({ width, height, ...props }) => {
  return <System.Avatar size={`${Math.min(width, height)}px`} {...props} />
}

export const Avatar = withHOC(InnerAvatar)

Avatar.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(Avatar, {
  name: merge(controls.name, { defaultValue: "John Doe" }),
  src: {
    type: ControlType.String,
    defaultValue: "https://api.adorable.io/avatars/285/1@adorable.io.png",
  },
})
