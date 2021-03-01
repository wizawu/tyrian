declare namespace javax {
  namespace swing {

    class JPopupMenu extends javax.swing.JComponent implements javax.accessibility.Accessible, javax.swing.MenuElement {

      static popupPostionFixDisabled: boolean
      invoker: java.awt.Component
      popup: javax.swing.Popup
      frame: java.awt.Frame
      public static setDefaultLightWeightPopupEnabled(arg0: boolean): void
      public static getDefaultLightWeightPopupEnabled(): boolean
      public constructor()
      public constructor(arg0: java.lang.String)
      public getUI(): javax.swing.plaf.PopupMenuUI
      public setUI(arg0: javax.swing.plaf.PopupMenuUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      protected processFocusEvent(arg0: java.awt.event.FocusEvent): void
      protected processKeyEvent(arg0: java.awt.event.KeyEvent): void
      public getSelectionModel(): javax.swing.SingleSelectionModel
      public setSelectionModel(arg0: javax.swing.SingleSelectionModel): void
      public add(arg0: javax.swing.JMenuItem): javax.swing.JMenuItem
      public add(arg0: java.lang.String): javax.swing.JMenuItem
      public add(arg0: javax.swing.Action): javax.swing.JMenuItem
      adjustPopupLocationToFitScreen(arg0: int, arg1: int): java.awt.Point
      static canPopupOverlapTaskBar(): boolean
      protected createActionComponent(arg0: javax.swing.Action): javax.swing.JMenuItem
      protected createActionChangeListener(arg0: javax.swing.JMenuItem): java.beans.PropertyChangeListener
      public remove(arg0: int): void
      public setLightWeightPopupEnabled(arg0: boolean): void
      public isLightWeightPopupEnabled(): boolean
      public getLabel(): java.lang.String
      public setLabel(arg0: java.lang.String): void
      public addSeparator(): void
      public insert(arg0: javax.swing.Action, arg1: int): void
      public insert(arg0: java.awt.Component, arg1: int): void
      public addPopupMenuListener(arg0: javax.swing.event.PopupMenuListener): void
      public removePopupMenuListener(arg0: javax.swing.event.PopupMenuListener): void
      public getPopupMenuListeners(): javax.swing.event.PopupMenuListener[]
      public addMenuKeyListener(arg0: javax.swing.event.MenuKeyListener): void
      public removeMenuKeyListener(arg0: javax.swing.event.MenuKeyListener): void
      public getMenuKeyListeners(): javax.swing.event.MenuKeyListener[]
      protected firePopupMenuWillBecomeVisible(): void
      protected firePopupMenuWillBecomeInvisible(): void
      protected firePopupMenuCanceled(): void
      alwaysOnTop(): boolean
      public pack(): void
      public setVisible(arg0: boolean): void
      public isVisible(): boolean
      public setLocation(arg0: int, arg1: int): void
      public getInvoker(): java.awt.Component
      public setInvoker(arg0: java.awt.Component): void
      public show(arg0: java.awt.Component, arg1: int, arg2: int): void
      getRootPopupMenu(): javax.swing.JPopupMenu
      public getComponentAtIndex(arg0: int): java.awt.Component
      public getComponentIndex(arg0: java.awt.Component): int
      public setPopupSize(arg0: java.awt.Dimension): void
      public setPopupSize(arg0: int, arg1: int): void
      public setSelected(arg0: java.awt.Component): void
      public isBorderPainted(): boolean
      public setBorderPainted(arg0: boolean): void
      protected paintBorder(arg0: java.awt.Graphics): void
      public getMargin(): java.awt.Insets
      isSubPopupMenu(arg0: javax.swing.JPopupMenu): boolean
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public processMouseEvent(arg0: java.awt.event.MouseEvent, arg1: javax.swing.MenuElement[], arg2: javax.swing.MenuSelectionManager): void
      public processKeyEvent(arg0: java.awt.event.KeyEvent, arg1: javax.swing.MenuElement[], arg2: javax.swing.MenuSelectionManager): void
      public menuSelectionChanged(arg0: boolean): void
      public getSubElements(): javax.swing.MenuElement[]
      public getComponent(): java.awt.Component
      public isPopupTrigger(arg0: java.awt.event.MouseEvent): boolean
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
