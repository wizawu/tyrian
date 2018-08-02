declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        interface MarkAndResetHandler {
                            mark(arg0: com.sun.corba.se.impl.encoding.RestorableInputStream): void
                            fragmentationOccured(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                            reset(): void
                        }
                    }
                }
            }
        }
    }
}