declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
                            class WriterToUTF8Buffered extends java.io.Writer implements com.sun.org.apache.xml.internal.serializer.WriterChain {
                                public constructor(arg0: java.io.OutputStream)
                                public write(arg0: int): void
                                public write(arg0: char[], arg1: int, arg2: int): void
                                public write(arg0: java.lang.String | string): void
                                public flushBuffer(): void
                                public flush(): void
                                public close(): void
                                public getOutputStream(): java.io.OutputStream
                                public getWriter(): java.io.Writer
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}