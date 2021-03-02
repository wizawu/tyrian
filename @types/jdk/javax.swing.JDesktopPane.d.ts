declare namespace javax {
  namespace swing {

    class JDesktopPane extends javax.swing.JLayeredPane implements javax.accessibility.Accessible {
      desktopManager: javax.swing.DesktopManager
      public static readonly LIVE_DRAG_MODE: int
      public static readonly OUTLINE_DRAG_MODE: int
      public constructor()
      public getUI(): javax.swing.plaf.DesktopPaneUI
      public setUI(arg0: javax.swing.plaf.DesktopPaneUI): void
      public setDragMode(arg0: number | java.lang.Integer): void
      public getDragMode(): number
      public getDesktopManager(): javax.swing.DesktopManager
      public setDesktopManager(arg0: javax.swing.DesktopManager): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public getAllFrames(): javax.swing.JInternalFrame[]
      public getSelectedFrame(): javax.swing.JInternalFrame
      public setSelectedFrame(arg0: javax.swing.JInternalFrame): void
      public getAllFramesInLayer(arg0: number | java.lang.Integer): javax.swing.JInternalFrame[]
      getNextFrame(arg0: javax.swing.JInternalFrame): javax.swing.JInternalFrame
      public remove(arg0: java.awt.Component): void
      public selectFrame(arg0: boolean | java.lang.Boolean): javax.swing.JInternalFrame
      setComponentOrderCheckingEnabled(arg0: boolean | java.lang.Boolean): void
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      public remove(arg0: number | java.lang.Integer): void
      public removeAll(): void
      public setComponentZOrder(arg0: java.awt.Component, arg1: number | java.lang.Integer): void
      setUIProperty(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
