import Icon from "baseui/icon/triangle-up"
import * as React from "react"
import { withIcon } from "./withIcon"

const Wrapper: React.SFC = props => {
  return <Icon {...props} />
}

export const TriangleUp = withIcon(Wrapper)
