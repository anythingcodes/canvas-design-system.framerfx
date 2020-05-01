import * as System from "baseui/tag"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/Tag"
import { withHOC } from "../withHOC"

const InnerTag: React.SFC<any> = ({ text, ...props }) => {
  return <System.Tag {...props}>{text}</System.Tag>
}

export const Tag = withHOC(InnerTag)

Tag.defaultProps = {
  width: 113,
  height: 32,
}

addPropertyControls(Tag, {
  text: { type: ControlType.String, defaultValue: "THIS IS A TAG!" },
  closeable: merge(controls.closeable, {}),
  disabled: merge(controls.disabled, {}),
  kind: {
    title: "Kind",
    options: ["primary", "positive", "warning", "negative", "neutral"],
    optionTitles: ["Primary", "Positive", "Warning", "Negative", "Neutral"],
    defaultValue: "primary",
    type: ControlType.Enum,
  },
  variant: merge(controls.variant, {}),
})
