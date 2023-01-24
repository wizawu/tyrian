declare namespace java {
  namespace awt {
    interface MenuContainer {
      getFont(): java.awt.Font
      remove(arg0: java.awt.MenuComponent): void
      postEvent(arg0: java.awt.Event): boolean
    }
  }
}
