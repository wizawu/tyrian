declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicToolBarUI extends javax.swing.plaf.ToolBarUI implements javax.swing.SwingConstants {
          protected toolBar: javax.swing.JToolBar
          protected dragWindow: javax.swing.plaf.basic.BasicToolBarUI$DragWindow
          protected focusedCompIndex: int
          protected dockingColor: java.awt.Color
          protected floatingColor: java.awt.Color
          protected dockingBorderColor: java.awt.Color
          protected floatingBorderColor: java.awt.Color
          protected dockingListener: javax.swing.event.MouseInputListener
          protected propertyListener: java.beans.PropertyChangeListener
          protected toolBarContListener: java.awt.event.ContainerListener
          protected toolBarFocusListener: java.awt.event.FocusListener
          protected constraintBeforeFloating: java.lang.String
          protected upKey: javax.swing.KeyStroke
          protected downKey: javax.swing.KeyStroke
          protected leftKey: javax.swing.KeyStroke
          protected rightKey: javax.swing.KeyStroke
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected installComponents(): void
          protected uninstallComponents(): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected installKeyboardActions(): void
          getInputMap(arg0: int): javax.swing.InputMap
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          protected uninstallKeyboardActions(): void
          protected navigateFocusedComp(arg0: int): void
          protected createRolloverBorder(): javax.swing.border.Border
          protected createNonRolloverBorder(): javax.swing.border.Border
          protected createFloatingFrame(arg0: javax.swing.JToolBar): javax.swing.JFrame
          protected createFloatingWindow(arg0: javax.swing.JToolBar): javax.swing.RootPaneContainer
          protected createDragWindow(arg0: javax.swing.JToolBar): javax.swing.plaf.basic.BasicToolBarUI$DragWindow
          public isRolloverBorders(): boolean
          public setRolloverBorders(arg0: boolean): void
          protected installRolloverBorders(arg0: javax.swing.JComponent): void
          protected installNonRolloverBorders(arg0: javax.swing.JComponent): void
          protected installNormalBorders(arg0: javax.swing.JComponent): void
          protected setBorderToRollover(arg0: java.awt.Component): void
          protected getRolloverBorder(arg0: javax.swing.AbstractButton): javax.swing.border.Border
          protected setBorderToNonRollover(arg0: java.awt.Component): void
          protected getNonRolloverBorder(arg0: javax.swing.AbstractButton): javax.swing.border.Border
          protected setBorderToNormal(arg0: java.awt.Component): void
          public setFloatingLocation(arg0: int, arg1: int): void
          public isFloating(): boolean
          public setFloating(arg0: boolean, arg1: java.awt.Point): void
          public setOrientation(arg0: int): void
          public getDockingColor(): java.awt.Color
          public setDockingColor(arg0: java.awt.Color): void
          public getFloatingColor(): java.awt.Color
          public setFloatingColor(arg0: java.awt.Color): void
          public canDock(arg0: java.awt.Component, arg1: java.awt.Point): boolean
          protected dragTo(arg0: java.awt.Point, arg1: java.awt.Point): void
          protected floatAt(arg0: java.awt.Point, arg1: java.awt.Point): void
          protected createToolBarContListener(): java.awt.event.ContainerListener
          protected createToolBarFocusListener(): java.awt.event.FocusListener
          protected createPropertyListener(): java.beans.PropertyChangeListener
          protected createDockingListener(): javax.swing.event.MouseInputListener
          protected createFrameListener(): java.awt.event.WindowListener
          protected paintDragWindow(arg0: java.awt.Graphics): void
        }

      }
    }
  }
}
