import Icon from "baseui/icon/filter"
import * as React from "react"
import { withIcon } from "./withIcon"

const Wrapper: React.SFC = props => {
  return <Icon {...props} />
}

export const Filter = withIcon(Wrapper)
