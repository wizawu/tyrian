declare namespace java {
  namespace awt {

    class MenuBar extends java.awt.MenuComponent implements java.awt.MenuContainer, javax.accessibility.Accessible {
      public constructor()
      constructComponentName(): java.lang.String
      public addNotify(): void
      public removeNotify(): void
      public getHelpMenu(): java.awt.Menu
      public setHelpMenu(arg0: java.awt.Menu): void
      public add(arg0: java.awt.Menu): java.awt.Menu
      public remove(arg0: int): void
      public remove(arg0: java.awt.MenuComponent): void
      public getMenuCount(): int
      public countMenus(): int
      getMenuCountImpl(): int
      public getMenu(arg0: int): java.awt.Menu
      getMenuImpl(arg0: int): java.awt.Menu
      public shortcuts(): java.util.Enumeration<java.awt.MenuShortcut>
      public getShortcutMenuItem(arg0: java.awt.MenuShortcut): java.awt.MenuItem
      handleShortcut(arg0: java.awt.event.KeyEvent): boolean
      public deleteShortcut(arg0: java.awt.MenuShortcut): void
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      getAccessibleChildIndex(arg0: java.awt.MenuComponent): int
    }

  }
}
