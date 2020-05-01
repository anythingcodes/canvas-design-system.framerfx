import Icon from "baseui/icon/arrow-down"
import * as React from "react"
import { withIcon } from "./withIcon"

const Wrapper: React.SFC = props => {
  return <Icon {...props} />
}

export const ArrowDown = withIcon(Wrapper)
