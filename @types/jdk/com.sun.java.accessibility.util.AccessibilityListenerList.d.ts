declare namespace com {
  namespace sun {
    namespace java {
      namespace accessibility {
        namespace util {
          class AccessibilityListenerList {
            protected listenerList: java.lang.Object[]
            public constructor()
            public getListenerList(): java.lang.Object[]
            public getListenerCount(): number
            public getListenerCount(arg0: java.lang.Class<java.util.EventListener>): number
            public add(arg0: java.lang.Class<java.util.EventListener>, arg1: java.util.EventListener): void
            public remove(arg0: java.lang.Class<java.util.EventListener>, arg1: java.util.EventListener): void
            public toString(): java.lang.String
          }
        }
      }
    }
  }
}
