import * as System from "baseui/accordion"
import { addPropertyControls, ControlType, RenderTarget, Frame } from "framer"
import * as React from "react"
import { cloneElement, createElement, useMemo, useEffect, useCallback } from "react"
import { controls, merge } from "../generated/Accordion"
import { useManagedState } from "../utils/useManagedState"
import { placeholderState } from "../utils/placeholderState"
import { withHOC } from "../withHOC"

const InnerAccordion: React.SFC<any> = ({ content, expanded: defaultExpanded, ...props }) => {
  const defaultExpandedAsArray = defaultExpanded.split(/,\s*/)
  const [expanded, setExpanded] = useManagedState(defaultExpandedAsArray)
  const panels = useMemo(() => {
    return content.map((panel, i) => {
      const key = String(i)

      return (
        <System.Panel expanded={expanded.includes(key)} title={panel.props.name} key={key}>
          {cloneElement(panel, {
            ...panel.props,
            style: {
              position: "relative",
            },
          })}
        </System.Panel>
      )
    })
  }, [content, expanded])

  const onChange = useCallback(({ expanded }) => {
    setExpanded(expanded)
  }, [])

  useEffect(() => setExpanded(defaultExpandedAsArray), [defaultExpanded])

  return content.length === 0 &&
    (RenderTarget.current() === RenderTarget.canvas || RenderTarget.current() === RenderTarget.thumbnail) ? (
    createElement(placeholderState, {
      title: "No panels",
      label: "Add panels by connecting them on the Canvas",
    })
  ) : (
    <Frame size="100%" background="transparent" style={{ overflow: "hidden" }}>
      <System.Accordion onChange={onChange} {...props}>
        {panels}
      </System.Accordion>
    </Frame>
  )
}

export const Accordion = withHOC(InnerAccordion)

Accordion.defaultProps = {
  width: 500,
  height: 200,
}

addPropertyControls(Accordion, {
  expanded: {
    type: ControlType.String,
    title: "Expanded Indices (Comma-separated)",
    defaultValue: "0, 1",
  },
  accordion: merge(controls.accordion, {}),
  disabled: merge(controls.disabled, {}),
  renderPanelContent: merge(controls.renderPanelContent, {}),
  content: {
    title: "Panels",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.ComponentInstance,
    },
    defaultValue: [],
  },
})
