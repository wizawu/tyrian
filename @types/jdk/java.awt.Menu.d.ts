declare namespace java {
  namespace awt {

    class Menu extends java.awt.MenuItem implements java.awt.MenuContainer, javax.accessibility.Accessible {

      isHelpMenu: boolean
      public constructor()
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: boolean)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public removeNotify(): void
      public isTearOff(): boolean
      public getItemCount(): int
      public countItems(): int
      readonly countItemsImpl(): int
      public getItem(arg0: int): java.awt.MenuItem
      readonly getItemImpl(arg0: int): java.awt.MenuItem
      public add(arg0: java.awt.MenuItem): java.awt.MenuItem
      public add(arg0: java.lang.String): void
      public insert(arg0: java.awt.MenuItem, arg1: int): void
      public insert(arg0: java.lang.String, arg1: int): void
      public addSeparator(): void
      public insertSeparator(arg0: int): void
      public remove(arg0: int): void
      public remove(arg0: java.awt.MenuComponent): void
      public removeAll(): void
      handleShortcut(arg0: java.awt.event.KeyEvent): boolean
      getShortcutMenuItem(arg0: java.awt.MenuShortcut): java.awt.MenuItem
      shortcuts(): java.util.Enumeration<java.awt.MenuShortcut>
      deleteShortcut(arg0: java.awt.MenuShortcut): void
      public paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      getAccessibleChildIndex(arg0: java.awt.MenuComponent): int
    }

  }
}
