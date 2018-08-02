declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
class SelectorImpl extends java.lang.Thread implements com.sun.corba.se.pept.transport.Selector {
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
    public setTimeout(arg0: long): void
    public getTimeout(): long
    public registerInterestOps(arg0: com.sun.corba.se.pept.transport.EventHandler): void
    public registerForEvent(arg0: com.sun.corba.se.pept.transport.EventHandler): void
    public unregisterForEvent(arg0: com.sun.corba.se.pept.transport.EventHandler): void
    public close(): void
    public run(): void
    protected dprint(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}