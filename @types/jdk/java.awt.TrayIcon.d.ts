declare namespace java {
  namespace awt {

    class TrayIcon {
      mouseListener: java.awt.event.MouseListener
      mouseMotionListener: java.awt.event.MouseMotionListener
      actionListener: java.awt.event.ActionListener
      getAccessControlContext(): java.security.AccessControlContext
      public constructor(arg0: java.awt.Image)
      public constructor(arg0: java.awt.Image, arg1: java.lang.String)
      public constructor(arg0: java.awt.Image, arg1: java.lang.String, arg2: java.awt.PopupMenu)
      public setImage(arg0: java.awt.Image): void
      public getImage(): java.awt.Image
      public setPopupMenu(arg0: java.awt.PopupMenu): void
      public getPopupMenu(): java.awt.PopupMenu
      public setToolTip(arg0: java.lang.String): void
      public getToolTip(): java.lang.String
      public setImageAutoSize(arg0: boolean): void
      public isImageAutoSize(): boolean
      public addMouseListener(arg0: java.awt.event.MouseListener): void
      public removeMouseListener(arg0: java.awt.event.MouseListener): void
      public getMouseListeners(): java.awt.event.MouseListener[]
      public addMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
      public removeMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
      public getMouseMotionListeners(): java.awt.event.MouseMotionListener[]
      public getActionCommand(): java.lang.String
      public setActionCommand(arg0: java.lang.String): void
      public addActionListener(arg0: java.awt.event.ActionListener): void
      public removeActionListener(arg0: java.awt.event.ActionListener): void
      public getActionListeners(): java.awt.event.ActionListener[]
      public displayMessage(arg0: java.lang.String, arg1: java.lang.String, arg2: java.awt.TrayIcon$MessageType): void
      public getSize(): java.awt.Dimension
      addNotify(): void
      removeNotify(): void
      setID(arg0: int): void
      getID(): int
      dispatchEvent(arg0: java.awt.AWTEvent): void
      processEvent(arg0: java.awt.AWTEvent): void
      processMouseEvent(arg0: java.awt.event.MouseEvent): void
      processMouseMotionEvent(arg0: java.awt.event.MouseEvent): void
      processActionEvent(arg0: java.awt.event.ActionEvent): void
    }

  }
}
