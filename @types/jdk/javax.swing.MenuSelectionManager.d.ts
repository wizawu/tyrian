declare namespace javax {
  namespace swing {
    class MenuSelectionManager {
      protected changeEvent: javax.swing.event.ChangeEvent
      protected listenerList: javax.swing.event.EventListenerList
      public constructor()
      public static defaultManager(): javax.swing.MenuSelectionManager
      public setSelectedPath(arg0: javax.swing.MenuElement[]): void
      public getSelectedPath(): javax.swing.MenuElement[]
      public clearSelectedPath(): void
      public addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      public removeChangeListener(
        arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda
      ): void
      public getChangeListeners(): javax.swing.event.ChangeListener[]
      protected fireStateChanged(): void
      public processMouseEvent(arg0: java.awt.event.MouseEvent): void
      public componentForPoint(arg0: java.awt.Component, arg1: java.awt.Point): java.awt.Component
      public processKeyEvent(arg0: java.awt.event.KeyEvent): void
      public isComponentPartOfCurrentMenu(arg0: java.awt.Component): boolean
    }
  }
}
