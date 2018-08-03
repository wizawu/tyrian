declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace tcp {
                class ConnectionMultiplexer {
                    public constructor(arg0: sun.rmi.transport.tcp.TCPChannel, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, arg3: boolean)
                    public run(): void
                    public openConnection(): sun.rmi.transport.tcp.TCPConnection
                    public shutDown(): void
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}