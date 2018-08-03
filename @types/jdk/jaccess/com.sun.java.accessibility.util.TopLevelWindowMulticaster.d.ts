declare namespace com {
    namespace sun {
        namespace java {
            namespace accessibility {
                namespace util {
                    class TopLevelWindowMulticaster extends java.awt.AWTEventMulticaster implements com.sun.java.accessibility.util.TopLevelWindowListener {
                        protected constructor(arg0: java.util.EventListener, arg1: java.util.EventListener)
                        public topLevelWindowCreated(arg0: java.awt.Window): void
                        public topLevelWindowDestroyed(arg0: java.awt.Window): void
                        public static add(arg0: com.sun.java.accessibility.util.TopLevelWindowListener, arg1: com.sun.java.accessibility.util.TopLevelWindowListener): com.sun.java.accessibility.util.TopLevelWindowListener
                        public static remove(arg0: com.sun.java.accessibility.util.TopLevelWindowListener, arg1: com.sun.java.accessibility.util.TopLevelWindowListener): com.sun.java.accessibility.util.TopLevelWindowListener
                        protected static addInternal(arg0: java.util.EventListener, arg1: java.util.EventListener): java.util.EventListener
                        protected static removeInternal(arg0: java.util.EventListener, arg1: java.util.EventListener): java.util.EventListener
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}