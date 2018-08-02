declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace staxex {
                            interface XMLStreamWriterEx extends javax.xml.stream.XMLStreamWriter {
                                writeBinary(arg0: byte[], arg1: int, arg2: int, arg3: java.lang.String | string): void
                                writeBinary(arg0: javax.activation.DataHandler): void
                                writeBinary(arg0: java.lang.String | string): java.io.OutputStream
                                writePCDATA(arg0: java.lang.CharSequence): void
                                getNamespaceContext(): com.sun.xml.internal.org.jvnet.staxex.NamespaceContextEx
                                getNamespaceContext(): javax.xml.namespace.NamespaceContext
                            }
                        }
                    }
                }
            }
        }
    }
}