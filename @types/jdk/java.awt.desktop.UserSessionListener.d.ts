declare namespace java {
  namespace awt {
    namespace desktop {

      interface UserSessionListener extends java.awt.desktop.SystemEventListener {
        userSessionDeactivated(arg0: java.awt.desktop.UserSessionEvent): void
        userSessionActivated(arg0: java.awt.desktop.UserSessionEvent): void
      }

    }
  }
}
