import Icon from "baseui/icon/arrow-right"
import * as React from "react"
import { withIcon } from "./withIcon"

const Wrapper: React.SFC = props => {
  return <Icon {...props} />
}

export const ArrowRight = withIcon(Wrapper)
