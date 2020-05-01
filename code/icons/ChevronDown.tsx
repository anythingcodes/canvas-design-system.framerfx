import Icon from "baseui/icon/chevron-down"
import * as React from "react"
import { withIcon } from "./withIcon"

const Wrapper: React.SFC = props => {
  return <Icon {...props} />
}

export const ChevronDown = withIcon(Wrapper)
