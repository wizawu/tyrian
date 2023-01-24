declare namespace java {
  namespace awt {
    namespace event {
      class AWTEventListenerProxy
        extends java.util.EventListenerProxy<java.awt.event.AWTEventListener>
        implements java.awt.event.AWTEventListener
      {
        public constructor(
          arg0: number | java.lang.Long,
          arg1: java.awt.event.AWTEventListener | java.awt.event.AWTEventListener$$lambda
        )
        public eventDispatched(arg0: java.awt.AWTEvent): void
        public getEventMask(): number
      }
    }
  }
}
