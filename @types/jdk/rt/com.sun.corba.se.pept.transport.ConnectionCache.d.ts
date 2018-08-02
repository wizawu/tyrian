declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
                        interface ConnectionCache {
                            getCacheType(): string
                            stampTime(arg0: com.sun.corba.se.pept.transport.Connection): void
                            numberOfConnections(): long
                            numberOfIdleConnections(): long
                            numberOfBusyConnections(): long
                            reclaim(): boolean
                            close(): void
                        }
                    }
                }
            }
        }
    }
}