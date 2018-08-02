declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace mimepull {
                            class MIMEPart {
                                public read(): java.io.InputStream
                                public close(): void
                                public readOnce(): java.io.InputStream
                                public moveTo(arg0: java.io.File): void
                                public getContentId(): string
                                public getContentTransferEncoding(): string
                                public getContentType(): string
                                public getHeader(arg0: java.lang.String | string): java.util.List<java.lang.String>
                                public getAllHeaders(): java.util.List<com.sun.xml.internal.org.jvnet.mimepull.Header>
                                public toString(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}