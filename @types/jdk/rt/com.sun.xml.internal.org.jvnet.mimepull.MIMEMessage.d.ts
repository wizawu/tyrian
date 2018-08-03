declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace mimepull {
                            class MIMEMessage {
                                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string)
                                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.org.jvnet.mimepull.MIMEConfig)
                                public getAttachments(): java.util.List<com.sun.xml.internal.org.jvnet.mimepull.MIMEPart>
                                public getPart(arg0: int): com.sun.xml.internal.org.jvnet.mimepull.MIMEPart
                                public getPart(arg0: java.lang.String | string): com.sun.xml.internal.org.jvnet.mimepull.MIMEPart
                                public parseAll(): void
                                public makeProgress(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}