import * as System from "baseui/breadcrumbs"
import { StyledLink as Link } from "baseui/link"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"

const InnerBreadcrumbs: React.SFC<any> = ({ items, activeItemIndex, ...props }) => {
  return (
    <System.Breadcrumbs {...props}>
      {items.map((item, idx) => {
        if (idx === activeItemIndex) {
          return <span key={idx}>{item}</span>
        }
        return <Link key={idx}>{item}</Link>
      })}
    </System.Breadcrumbs>
  )
}

export const Breadcrumbs = withHOC(InnerBreadcrumbs)

Breadcrumbs.defaultProps = {
  width: 394,
  height: 26,
}

const defaultItems = ["Parent Page", "Sub-Parent Page", "Current Page"]

addPropertyControls(Breadcrumbs, {
  items: {
    type: ControlType.Array,
    title: "Items",
    defaultValue: defaultItems,
    propertyControl: {
      type: ControlType.String,
    },
  },
  activeItemIndex: {
    type: ControlType.Number,
    title: "Active Item",
    displayStepper: true,
    defaultValue: defaultItems.length - 1,
  },
})
