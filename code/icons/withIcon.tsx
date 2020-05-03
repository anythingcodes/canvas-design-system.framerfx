import * as React from "./node_modules/react"
import { withHOC } from "../withHOC"
import { addPropertyControls, ControlType } from "./node_modules/framer"
import * as canvas from "../canvas"

export function withIcon(IconComp) {
  const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
  }

  const InnerIcon: React.SFC = props => {
    return <IconComp {...props} style={style} />
  }

  const ResultingComponent = withHOC(InnerIcon)

  ResultingComponent.defaultProps = {
    width: 50,
    height: 50,
  }

  addPropertyControls(ResultingComponent, {
    color: { type: ControlType.Color, defaultValue: canvas.colors.mono1000, title: "Color" },
  })

  return ResultingComponent
}
