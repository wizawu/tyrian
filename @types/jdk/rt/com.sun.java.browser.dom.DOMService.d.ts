declare namespace com {
    namespace sun {
        namespace java {
            namespace browser {
                namespace dom {
                    abstract class DOMService {
                        public static getService(arg0: java.lang.Object): com.sun.java.browser.dom.DOMService
                        public constructor()
                        public abstract invokeAndWait(arg0: com.sun.java.browser.dom.DOMAction | com.sun.java.browser.dom.DOMAction$$Lambda): java.lang.Object
                        public abstract invokeLater(arg0: com.sun.java.browser.dom.DOMAction | com.sun.java.browser.dom.DOMAction$$Lambda): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}