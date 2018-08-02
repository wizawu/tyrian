declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
                        interface Selector {
                            setTimeout(arg0: long): void
                            getTimeout(): long
                            registerInterestOps(arg0: com.sun.corba.se.pept.transport.EventHandler): void
                            registerForEvent(arg0: com.sun.corba.se.pept.transport.EventHandler): void
                            unregisterForEvent(arg0: com.sun.corba.se.pept.transport.EventHandler): void
                            close(): void
                        }
                    }
                }
            }
        }
    }
}