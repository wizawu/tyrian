declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace tcp {
                class TCPTransport extends sun.rmi.transport.Transport {
                    public shedConnectionCaches(): void
                    public getChannel(arg0: sun.rmi.transport.Endpoint): sun.rmi.transport.tcp.TCPChannel
                    public free(arg0: sun.rmi.transport.Endpoint): void
                    public exportObject(arg0: sun.rmi.transport.Target): void
                    protected targetUnexported(): void
                    protected checkAcceptPermission(arg0: java.security.AccessControlContext): void
                    public static getClientHost(): string
                    public getChannel(arg0: sun.rmi.transport.Endpoint): sun.rmi.transport.Channel
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}