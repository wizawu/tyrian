declare namespace javax {
  namespace swing {

    class JInternalFrame extends javax.swing.JComponent implements javax.accessibility.Accessible, javax.swing.WindowConstants, javax.swing.RootPaneContainer {
      protected rootPane: javax.swing.JRootPane
      protected rootPaneCheckingEnabled: boolean
      protected closable: boolean
      protected isClosed: boolean
      protected maximizable: boolean
      protected isMaximum: boolean
      protected iconable: boolean
      protected isIcon: boolean
      protected resizable: boolean
      protected isSelected: boolean
      protected frameIcon: javax.swing.Icon
      protected title: java.lang.String
      protected desktopIcon: javax.swing.JInternalFrame$JDesktopIcon
      public static readonly CONTENT_PANE_PROPERTY: java.lang.String
      public static readonly MENU_BAR_PROPERTY: java.lang.String
      public static readonly TITLE_PROPERTY: java.lang.String
      public static readonly LAYERED_PANE_PROPERTY: java.lang.String
      public static readonly ROOT_PANE_PROPERTY: java.lang.String
      public static readonly GLASS_PANE_PROPERTY: java.lang.String
      public static readonly FRAME_ICON_PROPERTY: java.lang.String
      public static readonly IS_SELECTED_PROPERTY: java.lang.String
      public static readonly IS_CLOSED_PROPERTY: java.lang.String
      public static readonly IS_MAXIMUM_PROPERTY: java.lang.String
      public static readonly IS_ICON_PROPERTY: java.lang.String
      isDragging: boolean
      danger: boolean
      public constructor()
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: boolean)
      public constructor(arg0: java.lang.String, arg1: boolean, arg2: boolean)
      public constructor(arg0: java.lang.String, arg1: boolean, arg2: boolean, arg3: boolean)
      public constructor(arg0: java.lang.String, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean)
      protected createRootPane(): javax.swing.JRootPane
      public getUI(): javax.swing.plaf.InternalFrameUI
      public setUI(arg0: javax.swing.plaf.InternalFrameUI): void
      public updateUI(): void
      updateUIWhenHidden(): void
      public getUIClassID(): java.lang.String
      protected isRootPaneCheckingEnabled(): boolean
      protected setRootPaneCheckingEnabled(arg0: boolean): void
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
      public remove(arg0: java.awt.Component): void
      public setLayout(arg0: java.awt.LayoutManager): void
      public getMenuBar(): javax.swing.JMenuBar
      public getJMenuBar(): javax.swing.JMenuBar
      public setMenuBar(arg0: javax.swing.JMenuBar): void
      public setJMenuBar(arg0: javax.swing.JMenuBar): void
      public getContentPane(): java.awt.Container
      public setContentPane(arg0: java.awt.Container): void
      public getLayeredPane(): javax.swing.JLayeredPane
      public setLayeredPane(arg0: javax.swing.JLayeredPane): void
      public getGlassPane(): java.awt.Component
      public setGlassPane(arg0: java.awt.Component): void
      public getRootPane(): javax.swing.JRootPane
      protected setRootPane(arg0: javax.swing.JRootPane): void
      public setClosable(arg0: boolean): void
      public isClosable(): boolean
      public isClosed(): boolean
      public setClosed(arg0: boolean): void
      public setResizable(arg0: boolean): void
      public isResizable(): boolean
      public setIconifiable(arg0: boolean): void
      public isIconifiable(): boolean
      public isIcon(): boolean
      public setIcon(arg0: boolean): void
      public setMaximizable(arg0: boolean): void
      public isMaximizable(): boolean
      public isMaximum(): boolean
      public setMaximum(arg0: boolean): void
      public getTitle(): java.lang.String
      public setTitle(arg0: java.lang.String): void
      public setSelected(arg0: boolean): void
      public isSelected(): boolean
      public setFrameIcon(arg0: javax.swing.Icon): void
      public getFrameIcon(): javax.swing.Icon
      public moveToFront(): void
      public moveToBack(): void
      public getLastCursor(): java.awt.Cursor
      public setCursor(arg0: java.awt.Cursor): void
      public setLayer(arg0: java.lang.Integer): void
      public setLayer(arg0: int): void
      public getLayer(): int
      public getDesktopPane(): javax.swing.JDesktopPane
      public setDesktopIcon(arg0: javax.swing.JInternalFrame$JDesktopIcon): void
      public getDesktopIcon(): javax.swing.JInternalFrame$JDesktopIcon
      public getNormalBounds(): java.awt.Rectangle
      public setNormalBounds(arg0: java.awt.Rectangle): void
      public getFocusOwner(): java.awt.Component
      public getMostRecentFocusOwner(): java.awt.Component
      public restoreSubcomponentFocus(): void
      public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
      public addInternalFrameListener(arg0: javax.swing.event.InternalFrameListener): void
      public removeInternalFrameListener(arg0: javax.swing.event.InternalFrameListener): void
      public getInternalFrameListeners(): javax.swing.event.InternalFrameListener[]
      protected fireInternalFrameEvent(arg0: int): void
      public doDefaultCloseAction(): void
      public setDefaultCloseOperation(arg0: int): void
      public getDefaultCloseOperation(): int
      public pack(): void
      public show(): void
      public hide(): void
      public dispose(): void
      public toFront(): void
      public toBack(): void
      public setFocusCycleRoot(arg0: boolean): void
      public isFocusCycleRoot(): boolean
      public getFocusCycleRootAncestor(): java.awt.Container
      public getWarningString(): java.lang.String
      compWriteObjectNotify(): void
      protected paramString(): java.lang.String
      protected paintComponent(arg0: java.awt.Graphics): void
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
