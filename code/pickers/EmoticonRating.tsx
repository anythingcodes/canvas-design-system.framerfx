import * as System from "baseui/rating"
import { addPropertyControls } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/StarRating"
import { withHOC } from "../withHOC"
import { useManagedState } from "../utils/useManagedState"

const InnerEmoticonRating: React.SFC<any> = ({ value, ...props }) => {
  const [currentValue, setValue] = useManagedState(value)

  return <System.EmoticonRating value={currentValue} onChange={e => setValue(e.value)} {...props} />
}

export const EmoticonRating = withHOC(InnerEmoticonRating)

EmoticonRating.defaultProps = {
  width: 260,
  height: 50,
}

addPropertyControls(EmoticonRating, {
  value: merge(controls.value, {
    min: 1,
    max: 5,
    defaultValue: 2,
    displayStepper: true,
  }),
})
