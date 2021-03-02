declare namespace java {
  namespace awt {
    namespace desktop {

      interface AppForegroundListener extends java.awt.desktop.SystemEventListener {
        appRaisedToForeground(arg0: java.awt.desktop.AppForegroundEvent): void
        appMovedToBackground(arg0: java.awt.desktop.AppForegroundEvent): void
      }

    }
  }
}
