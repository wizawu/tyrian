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
      dragFrame(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      endDraggingFrame(arg0: javax.swing.JComponent): void
      beginResizingFrame(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer): void
      resizeFrame(
        arg0: javax.swing.JComponent,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      ): void
      endResizingFrame(arg0: javax.swing.JComponent): void
      setBoundsForFrame(
        arg0: javax.swing.JComponent,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      ): void
    }
  }
}
