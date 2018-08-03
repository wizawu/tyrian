declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace staxex {
                            abstract class StreamingDataHandler extends javax.activation.DataHandler implements java.io.Closeable {
                                public constructor(arg0: java.lang.Object, arg1: java.lang.String | string)
                                public constructor(arg0: java.net.URL)
                                public constructor(arg0: javax.activation.DataSource)
                                public abstract readOnce(): java.io.InputStream
                                public abstract moveTo(arg0: java.io.File): void
                                public abstract close(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}