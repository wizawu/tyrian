declare namespace java {
  namespace awt {
    namespace desktop {
      interface ScreenSleepListener extends java.awt.desktop.SystemEventListener {
        screenAboutToSleep(arg0: java.awt.desktop.ScreenSleepEvent): void
        screenAwoke(arg0: java.awt.desktop.ScreenSleepEvent): void
      }
    }
  }
}
