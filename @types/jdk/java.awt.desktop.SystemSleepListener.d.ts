declare namespace java {
  namespace awt {
    namespace desktop {

      interface SystemSleepListener extends java.awt.desktop.SystemEventListener {

        systemAboutToSleep(arg0: java.awt.desktop.SystemSleepEvent): void
        systemAwoke(arg0: java.awt.desktop.SystemSleepEvent): void
      }

    }
  }
}
