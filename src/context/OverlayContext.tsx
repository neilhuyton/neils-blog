import React from "react"
const defaultState = {
  isOpen: false,
  toggleOverlay: () => {},
}
const OverlayContext = React.createContext(defaultState)
// Getting isOpen mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
// const supportsisOpenMode = () =>
//   window.matchMedia("(prefers-color-scheme: isOpen)").matches === true
class OverlayProvider extends React.Component {
  state = {
    isOpen: false,
  }
  toggleOverlay = () => {
    let isOpen = !this.state.isOpen
    this.setState({ isOpen })
  }
  componentDidMount() {
    // Getting isOpen mode value from localStorage!
    // const lsisOpen = JSON.parse(localStorage.getItem("isOpen"))
    // if (lsisOpen) {
    //   this.setState({ isOpen: lsisOpen })
    // } else if (supportsisOpenMode()) {
    //   this.setState({ isOpen: true })
    // }
  }
  render() {
    const { children } = this.props
    const { isOpen } = this.state
    return (
      <OverlayContext.Provider
        value={{
          isOpen,
          toggleOverlay: this.toggleOverlay,
        }}
      >
        {children}
      </OverlayContext.Provider>
    )
  }
}
export default OverlayContext
export { OverlayProvider }
