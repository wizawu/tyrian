declare namespace java {
  namespace awt {

    class EventQueue {
      public constructor()
      public postEvent(arg0: java.awt.AWTEvent): void
      public getNextEvent(): java.awt.AWTEvent
      getNextEventPrivate(): java.awt.AWTEvent
      getNextEvent(arg0: int): java.awt.AWTEvent
      public peekEvent(): java.awt.AWTEvent
      public peekEvent(arg0: int): java.awt.AWTEvent
      protected dispatchEvent(arg0: java.awt.AWTEvent): void
      public static getMostRecentEventTime(): long
      getMostRecentEventTimeEx(): long
      public static getCurrentEvent(): java.awt.AWTEvent
      public push(arg0: java.awt.EventQueue): void
      protected pop(): void
      public createSecondaryLoop(): java.awt.SecondaryLoop
      createSecondaryLoop(arg0: java.awt.Conditional, arg1: java.awt.EventFilter, arg2: long): java.awt.SecondaryLoop
      public static isDispatchThread(): boolean
      isDispatchThreadImpl(): boolean
      initDispatchThread(): void
      detachDispatchThread(arg0: java.awt.EventDispatchThread): void
      getDispatchThread(): java.awt.EventDispatchThread
      removeSourceEvents(arg0: java.lang.Object, arg1: boolean): void
      getMostRecentKeyEventTime(): long
      static setCurrentEventAndMostRecentTime(arg0: java.awt.AWTEvent): void
      public static invokeLater(arg0: java.lang.Runnable): void
      public static invokeAndWait(arg0: java.lang.Runnable): void
      static invokeAndWait(arg0: java.lang.Object, arg1: java.lang.Runnable): void
    }

  }
}
