declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    class StaxErrorReporter extends com.sun.org.apache.xerces.internal.impl.XMLErrorReporter {
                        protected fXMLReporter: javax.xml.stream.XMLReporter
                        public constructor(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager)
                        public constructor()
                        public reset(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager): void
                        public reportError(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.Object[], arg4: short): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}