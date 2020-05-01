import * as System from "baseui/rating"
import { addPropertyControls } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/StarRating"
import { withHOC } from "../withHOC"
import { useManagedState } from "../utils/useManagedState"

const InnerStarRating: React.SFC<any> = ({ value, ...props }) => {
  const [currentValue, setValue] = useManagedState(value)

  return <System.StarRating value={currentValue} onChange={({ value }) => setValue(value)} {...props} />
}

export const StarRating = withHOC(InnerStarRating)

StarRating.defaultProps = {
  width: 150,
  height: 25,
}

addPropertyControls(StarRating, {
  value: merge(controls.value, {
    min: 0,
    max: 100,
    defaultValue: 2,
    displayStepper: true,
  }),
  numItems: merge(controls.numItems, {
    min: 0,
    max: 100,
    defaultValue: 5,
    displayStepper: true,
  }),
})
