import Icon from "baseui/icon/chevron-right"
import * as React from "react"
import { withIcon } from "./withIcon"

const Wrapper: React.SFC = props => {
  return <Icon {...props} />
}

export const ChevronRight = withIcon(Wrapper)
