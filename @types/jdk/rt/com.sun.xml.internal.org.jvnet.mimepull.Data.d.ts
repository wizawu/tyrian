declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace mimepull {
                            interface Data {
                                size(): int
                                read(): byte[]
                                writeTo(arg0: com.sun.xml.internal.org.jvnet.mimepull.DataFile): long
                                createNext(arg0: com.sun.xml.internal.org.jvnet.mimepull.DataHead, arg1: java.nio.ByteBuffer): com.sun.xml.internal.org.jvnet.mimepull.Data
                            }
                        }
                    }
                }
            }
        }
    }
}