import * as React from "react"
import * as System from "baseui/file-uploader"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "../generated/FileUploader"
import { withHOC } from "../withHOC"

const InnerFileUploader: React.SFC = props => {
  return <System.FileUploader {...props} />
}

export const FileUploader = withHOC(InnerFileUploader)

FileUploader.defaultProps = {
  width: 480,
  height: 165,
}

addPropertyControls(FileUploader, {
  disableClick: merge(controls.disableClick, {}),
  disabled: merge(controls.disabled, {}),
  maxSize: merge(controls.maxSize, {}),
  minSize: merge(controls.minSize, {}),
  multiple: merge(controls.multiple, {}),
  preventDropOnDocument: merge(controls.preventDropOnDocument, {}),
  errorMessage: merge(controls.errorMessage, {}),
  progressAmount: merge(controls.progressAmount, {}),
  progressMessage: merge(controls.progressMessage, {}),
})
