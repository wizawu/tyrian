declare namespace com {
    namespace sun {
        namespace java {
            namespace accessibility {
                namespace util {
                    class AccessibilityListenerList {
                        protected listenerList: java.lang.Object[]
                        public constructor()
                        public getListenerList(): java.lang.Object[]
                        public getListenerCount(): int
                        public getListenerCount(arg0: java.lang.Class): int
                        public add(arg0: java.lang.Class, arg1: java.util.EventListener): void
                        public remove(arg0: java.lang.Class, arg1: java.util.EventListener): void
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}