/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./themes/prism-vscode-dark.css"

import React from "react"
import { OverlayProvider } from "./src/context/OverlayContext"
export const wrapRootElement = ({ element }) => (
  <OverlayProvider>{element}</OverlayProvider>
)
