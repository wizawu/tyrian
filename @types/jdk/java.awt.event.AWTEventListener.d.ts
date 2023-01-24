declare namespace java {
  namespace awt {
    namespace event {
      interface AWTEventListener$$lambda {
        (arg0: java.awt.AWTEvent): void
      }

      interface AWTEventListener extends java.util.EventListener {
        eventDispatched(arg0: java.awt.AWTEvent): void
      }
    }
  }
}
