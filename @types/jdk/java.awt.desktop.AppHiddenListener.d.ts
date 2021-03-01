declare namespace java {
  namespace awt {
    namespace desktop {

      interface AppHiddenListener extends java.awt.desktop.SystemEventListener {

        appHidden(arg0: java.awt.desktop.AppHiddenEvent): void
        appUnhidden(arg0: java.awt.desktop.AppHiddenEvent): void
      }

    }
  }
}
