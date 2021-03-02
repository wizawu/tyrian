declare namespace javax {
  namespace swing {

    class JMenu extends javax.swing.JMenuItem implements javax.accessibility.Accessible, javax.swing.MenuElement {
      protected popupListener: javax.swing.JMenu$WinListener
      public constructor()
      public constructor(arg0: java.lang.String)
      public constructor(arg0: javax.swing.Action)
      public constructor(arg0: java.lang.String, arg1: boolean)
      initFocusability(): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public setModel(arg0: javax.swing.ButtonModel): void
      public isSelected(): boolean
      public setSelected(arg0: boolean): void
      public isPopupMenuVisible(): boolean
      public setPopupMenuVisible(arg0: boolean): void
      protected getPopupMenuOrigin(): java.awt.Point
      public getDelay(): int
      public setDelay(arg0: int): void
      public setMenuLocation(arg0: int, arg1: int): void
      public add(arg0: javax.swing.JMenuItem): javax.swing.JMenuItem
      public add(arg0: java.awt.Component): java.awt.Component
      public add(arg0: java.awt.Component, arg1: int): java.awt.Component
      public add(arg0: java.lang.String): javax.swing.JMenuItem
      public add(arg0: javax.swing.Action): javax.swing.JMenuItem
      protected createActionComponent(arg0: javax.swing.Action): javax.swing.JMenuItem
      protected createActionChangeListener(arg0: javax.swing.JMenuItem): java.beans.PropertyChangeListener
      public addSeparator(): void
      public insert(arg0: java.lang.String, arg1: int): void
      public insert(arg0: javax.swing.JMenuItem, arg1: int): javax.swing.JMenuItem
      public insert(arg0: javax.swing.Action, arg1: int): javax.swing.JMenuItem
      public insertSeparator(arg0: int): void
      public getItem(arg0: int): javax.swing.JMenuItem
      public getItemCount(): int
      public isTearOff(): boolean
      public remove(arg0: javax.swing.JMenuItem): void
      public remove(arg0: int): void
      public remove(arg0: java.awt.Component): void
      public removeAll(): void
      public getMenuComponentCount(): int
      public getMenuComponent(arg0: int): java.awt.Component
      public getMenuComponents(): java.awt.Component[]
      public isTopLevelMenu(): boolean
      public isMenuComponent(arg0: java.awt.Component): boolean
      public getPopupMenu(): javax.swing.JPopupMenu
      public addMenuListener(arg0: javax.swing.event.MenuListener): void
      public removeMenuListener(arg0: javax.swing.event.MenuListener): void
      public getMenuListeners(): javax.swing.event.MenuListener[]
      protected fireMenuSelected(): void
      protected fireMenuDeselected(): void
      protected fireMenuCanceled(): void
      configureAcceleratorFromAction(arg0: javax.swing.Action): void
      protected createWinListener(arg0: javax.swing.JPopupMenu): javax.swing.JMenu$WinListener
      public menuSelectionChanged(arg0: boolean): void
      public getSubElements(): javax.swing.MenuElement[]
      public getComponent(): java.awt.Component
      public applyComponentOrientation(arg0: java.awt.ComponentOrientation): void
      public setComponentOrientation(arg0: java.awt.ComponentOrientation): void
      public setAccelerator(arg0: javax.swing.KeyStroke): void
      protected processKeyEvent(arg0: java.awt.event.KeyEvent): void
      public doClick(arg0: int): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
