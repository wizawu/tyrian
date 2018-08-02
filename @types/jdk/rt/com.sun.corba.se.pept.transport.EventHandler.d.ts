declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
                        interface EventHandler {
                            setUseSelectThreadToWait(arg0: boolean): void
                            shouldUseSelectThreadToWait(): boolean
                            getChannel(): java.nio.channels.SelectableChannel
                            getInterestOps(): int
                            setSelectionKey(arg0: java.nio.channels.SelectionKey): void
                            getSelectionKey(): java.nio.channels.SelectionKey
                            handleEvent(): void
                            setUseWorkerThreadForEvent(arg0: boolean): void
                            shouldUseWorkerThreadForEvent(): boolean
                            setWork(arg0: com.sun.corba.se.spi.orbutil.threadpool.Work): void
                            getWork(): com.sun.corba.se.spi.orbutil.threadpool.Work
                            getAcceptor(): com.sun.corba.se.pept.transport.Acceptor
                            getConnection(): com.sun.corba.se.pept.transport.Connection
                        }
                    }
                }
            }
        }
    }
}