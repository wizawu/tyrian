declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace tcp {
                class TCPChannel implements sun.rmi.transport.Channel {
                    public getEndpoint(): sun.rmi.transport.Endpoint
                    public newConnection(): sun.rmi.transport.Connection
                    public free(arg0: sun.rmi.transport.Connection, arg1: boolean): void
                    public shedCache(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}