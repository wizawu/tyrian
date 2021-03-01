declare namespace javax {
  namespace swing {

    interface DesktopManager {

      openFrame(arg0: javax.swing.JInternalFrame): void
      closeFrame(arg0: javax.swing.JInternalFrame): void
      maximizeFrame(arg0: javax.swing.JInternalFrame): void
      minimizeFrame(arg0: javax.swing.JInternalFrame): void
      iconifyFrame(arg0: javax.swing.JInternalFrame): void
      deiconifyFrame(arg0: javax.swing.JInternalFrame): void
      activateFrame(arg0: javax.swing.JInternalFrame): void
      deactivateFrame(arg0: javax.swing.JInternalFrame): void
      beginDraggingFrame(arg0: javax.swing.JComponent): void
      dragFrame(arg0: javax.swing.JComponent, arg1: int, arg2: int): void
      endDraggingFrame(arg0: javax.swing.JComponent): void
      beginResizingFrame(arg0: javax.swing.JComponent, arg1: int): void
      resizeFrame(arg0: javax.swing.JComponent, arg1: int, arg2: int, arg3: int, arg4: int): void
      endResizingFrame(arg0: javax.swing.JComponent): void
      setBoundsForFrame(arg0: javax.swing.JComponent, arg1: int, arg2: int, arg3: int, arg4: int): void
    }

  }
}
