declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicInternalFrameUI extends javax.swing.plaf.InternalFrameUI {
          protected frame: javax.swing.JInternalFrame
          protected borderListener: javax.swing.event.MouseInputAdapter
          protected propertyChangeListener: java.beans.PropertyChangeListener
          protected internalFrameLayout: java.awt.LayoutManager
          protected componentListener: java.awt.event.ComponentListener
          protected glassPaneDispatcher: javax.swing.event.MouseInputListener
          protected northPane: javax.swing.JComponent
          protected southPane: javax.swing.JComponent
          protected westPane: javax.swing.JComponent
          protected eastPane: javax.swing.JComponent
          protected titlePane: javax.swing.plaf.basic.BasicInternalFrameTitlePane
          protected openMenuKey: javax.swing.KeyStroke
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor(arg0: javax.swing.JInternalFrame)
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installDefaults(): void
          protected installKeyboardActions(): void
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          protected installComponents(): void
          protected installListeners(): void
          getInputMap(arg0: number | java.lang.Integer): javax.swing.InputMap
          createInputMap(arg0: number | java.lang.Integer): javax.swing.InputMap
          protected uninstallDefaults(): void
          protected uninstallComponents(): void
          protected uninstallListeners(): void
          protected uninstallKeyboardActions(): void
          updateFrameCursor(): void
          protected createLayoutManager(): java.awt.LayoutManager
          protected createPropertyChangeListener(): java.beans.PropertyChangeListener
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected replacePane(arg0: javax.swing.JComponent, arg1: javax.swing.JComponent): void
          protected deinstallMouseHandlers(arg0: javax.swing.JComponent): void
          protected installMouseHandlers(arg0: javax.swing.JComponent): void
          protected createNorthPane(arg0: javax.swing.JInternalFrame): javax.swing.JComponent
          protected createSouthPane(arg0: javax.swing.JInternalFrame): javax.swing.JComponent
          protected createWestPane(arg0: javax.swing.JInternalFrame): javax.swing.JComponent
          protected createEastPane(arg0: javax.swing.JInternalFrame): javax.swing.JComponent
          protected createBorderListener(arg0: javax.swing.JInternalFrame): javax.swing.event.MouseInputAdapter
          protected createInternalFrameListener(): void
          protected isKeyBindingRegistered(): boolean
          protected setKeyBindingRegistered(arg0: boolean | java.lang.Boolean): void
          public isKeyBindingActive(): boolean
          protected setKeyBindingActive(arg0: boolean | java.lang.Boolean): void
          protected setupMenuOpenKey(): void
          protected setupMenuCloseKey(): void
          public getNorthPane(): javax.swing.JComponent
          public setNorthPane(arg0: javax.swing.JComponent): void
          public getSouthPane(): javax.swing.JComponent
          public setSouthPane(arg0: javax.swing.JComponent): void
          public getWestPane(): javax.swing.JComponent
          public setWestPane(arg0: javax.swing.JComponent): void
          public getEastPane(): javax.swing.JComponent
          public setEastPane(arg0: javax.swing.JComponent): void
          protected getDesktopManager(): javax.swing.DesktopManager
          protected createDesktopManager(): javax.swing.DesktopManager
          protected closeFrame(arg0: javax.swing.JInternalFrame): void
          protected maximizeFrame(arg0: javax.swing.JInternalFrame): void
          protected minimizeFrame(arg0: javax.swing.JInternalFrame): void
          protected iconifyFrame(arg0: javax.swing.JInternalFrame): void
          protected deiconifyFrame(arg0: javax.swing.JInternalFrame): void
          protected activateFrame(arg0: javax.swing.JInternalFrame): void
          protected deactivateFrame(arg0: javax.swing.JInternalFrame): void
          protected createComponentListener(): java.awt.event.ComponentListener
          protected createGlassPaneDispatcher(): javax.swing.event.MouseInputListener
        }

      }
    }
  }
}
