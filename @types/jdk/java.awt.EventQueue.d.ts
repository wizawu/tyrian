declare namespace java {
  namespace awt {
    class EventQueue {
      public constructor()
      public postEvent(arg0: java.awt.AWTEvent): void
      public getNextEvent(): java.awt.AWTEvent
      getNextEventPrivate(): java.awt.AWTEvent
      getNextEvent(arg0: number | java.lang.Integer): java.awt.AWTEvent
      public peekEvent(): java.awt.AWTEvent
      public peekEvent(arg0: number | java.lang.Integer): java.awt.AWTEvent
      protected dispatchEvent(arg0: java.awt.AWTEvent): void
      public static getMostRecentEventTime(): number
      getMostRecentEventTimeEx(): number
      public static getCurrentEvent(): java.awt.AWTEvent
      public push(arg0: java.awt.EventQueue): void
      protected pop(): void
      public createSecondaryLoop(): java.awt.SecondaryLoop
      createSecondaryLoop(
        arg0: java.awt.Conditional,
        arg1: java.awt.EventFilter,
        arg2: number | java.lang.Long
      ): java.awt.SecondaryLoop
      public static isDispatchThread(): boolean
      isDispatchThreadImpl(): boolean
      initDispatchThread(): void
      detachDispatchThread(arg0: java.awt.EventDispatchThread): void
      getDispatchThread(): java.awt.EventDispatchThread
      removeSourceEvents(arg0: java.lang.Object | any, arg1: boolean | java.lang.Boolean): void
      getMostRecentKeyEventTime(): number
      static setCurrentEventAndMostRecentTime(arg0: java.awt.AWTEvent): void
      public static invokeLater(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): void
      public static invokeAndWait(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): void
      static invokeAndWait(arg0: java.lang.Object | any, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): void
    }
  }
}
