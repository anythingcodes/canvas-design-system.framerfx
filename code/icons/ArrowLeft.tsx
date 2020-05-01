import Icon from "baseui/icon/arrow-left"
import * as React from "react"
import { withIcon } from "./withIcon"

const Wrapper: React.SFC = props => {
  return <Icon {...props} />
}

export const ArrowLeft = withIcon(Wrapper)
