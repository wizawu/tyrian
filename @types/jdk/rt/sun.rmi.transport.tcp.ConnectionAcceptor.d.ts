declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace tcp {
                class ConnectionAcceptor implements java.lang.Runnable {
                    public constructor(arg0: sun.rmi.transport.tcp.TCPTransport)
                    public startNewAcceptor(): void
                    public accept(arg0: sun.rmi.transport.Connection): void
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class ConnectionAcceptor$$Lambda implements java.lang.Runnable {
                    public constructor(arg0: sun.rmi.transport.tcp.TCPTransport)
                }
            }
        }
    }
}