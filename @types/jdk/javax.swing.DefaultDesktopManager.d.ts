declare namespace javax {
  namespace swing {

    class DefaultDesktopManager implements javax.swing.DesktopManager, java.io.Serializable {
      static readonly HAS_BEEN_ICONIFIED_PROPERTY: java.lang.String
      static readonly DEFAULT_DRAG_MODE: int
      static readonly OUTLINE_DRAG_MODE: int
      static readonly FASTER_DRAG_MODE: int
      dragMode: int
      public constructor()
      public openFrame(arg0: javax.swing.JInternalFrame): void
      public closeFrame(arg0: javax.swing.JInternalFrame): void
      public maximizeFrame(arg0: javax.swing.JInternalFrame): void
      public minimizeFrame(arg0: javax.swing.JInternalFrame): void
      public iconifyFrame(arg0: javax.swing.JInternalFrame): void
      public deiconifyFrame(arg0: javax.swing.JInternalFrame): void
      public activateFrame(arg0: javax.swing.JInternalFrame): void
      public deactivateFrame(arg0: javax.swing.JInternalFrame): void
      public beginDraggingFrame(arg0: javax.swing.JComponent): void
      public dragFrame(arg0: javax.swing.JComponent, arg1: int, arg2: int): void
      public endDraggingFrame(arg0: javax.swing.JComponent): void
      public beginResizingFrame(arg0: javax.swing.JComponent, arg1: int): void
      public resizeFrame(arg0: javax.swing.JComponent, arg1: int, arg2: int, arg3: int, arg4: int): void
      public endResizingFrame(arg0: javax.swing.JComponent): void
      public setBoundsForFrame(arg0: javax.swing.JComponent, arg1: int, arg2: int, arg3: int, arg4: int): void
      protected removeIconFor(arg0: javax.swing.JInternalFrame): void
      protected getBoundsForIconOf(arg0: javax.swing.JInternalFrame): java.awt.Rectangle
      protected setPreviousBounds(arg0: javax.swing.JInternalFrame, arg1: java.awt.Rectangle): void
      protected getPreviousBounds(arg0: javax.swing.JInternalFrame): java.awt.Rectangle
      protected setWasIcon(arg0: javax.swing.JInternalFrame, arg1: java.lang.Boolean): void
      protected wasIcon(arg0: javax.swing.JInternalFrame): boolean
      getDesktopPane(arg0: javax.swing.JComponent): javax.swing.JDesktopPane
    }

  }
}
