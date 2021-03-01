declare namespace java {
  namespace awt {

    class PopupMenu extends java.awt.Menu {

      static nameCounter: int
      isTrayIconPopup: boolean
      public constructor()
      public constructor(arg0: java.lang.String)
      public getParent(): java.awt.MenuContainer
      constructComponentName(): java.lang.String
      public addNotify(): void
      public show(arg0: java.awt.Component, arg1: int, arg2: int): void
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
