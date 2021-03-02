declare namespace javax {
  namespace swing {
    namespace event {

      class EventListenerList implements java.io.Serializable {
        protected listenerList: java.lang.Object[]
        public constructor()
        public getListenerList(): java.lang.Object[]
        public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
        public getListenerCount(): number
        public getListenerCount(arg0: java.lang.Class<unknown>): number
        public add<T extends java.util.EventListener>(arg0: java.lang.Class<T>, arg1: T): void
        public remove<T extends java.util.EventListener>(arg0: java.lang.Class<T>, arg1: T): void
        public toString(): java.lang.String
      }

    }
  }
}
