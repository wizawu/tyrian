declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
class ListenerThreadImpl implements com.sun.corba.se.pept.transport.ListenerThread , com.sun.corba.se.spi.orbutil.threadpool.Work {
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.transport.Acceptor, arg2: com.sun.corba.se.pept.transport.Selector)
    public getAcceptor(): com.sun.corba.se.pept.transport.Acceptor
    public close(): void
    public doWork(): void
    public setEnqueueTime(arg0: long): void
    public getEnqueueTime(): long
    public getName(): string
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}