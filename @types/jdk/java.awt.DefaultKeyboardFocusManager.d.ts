declare namespace java {
  namespace awt {

    class DefaultKeyboardFocusManager extends java.awt.KeyboardFocusManager {

      public constructor()
      static sendMessage(arg0: java.awt.Component, arg1: java.awt.AWTEvent): boolean
      public dispatchEvent(arg0: java.awt.AWTEvent): boolean
      public dispatchKeyEvent(arg0: java.awt.event.KeyEvent): boolean
      public postProcessKeyEvent(arg0: java.awt.event.KeyEvent): boolean
      dumpMarkers(): void
      clearMarkers(): void
      public processKeyEvent(arg0: java.awt.Component, arg1: java.awt.event.KeyEvent): void
      protected enqueueKeyEvents(arg0: long, arg1: java.awt.Component): void
      protected dequeueKeyEvents(arg0: long, arg1: java.awt.Component): void
      protected discardKeyEvents(arg0: java.awt.Component): void
      public focusPreviousComponent(arg0: java.awt.Component): void
      public focusNextComponent(arg0: java.awt.Component): void
      public upFocusCycle(arg0: java.awt.Component): void
      public downFocusCycle(arg0: java.awt.Container): void
    }

  }
}
