import Icon from "baseui/icon/alert"
import * as React from "react"
import { withIcon } from "./withIcon"

const Wrapper: React.SFC = props => {
  return <Icon {...props} />
}

export const Alert = withIcon(Wrapper)
