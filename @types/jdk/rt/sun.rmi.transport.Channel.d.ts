declare namespace sun {
    namespace rmi {
        namespace transport {
interface Channel {
    newConnection(): sun.rmi.transport.Connection
    getEndpoint(): sun.rmi.transport.Endpoint
    free(arg0: sun.rmi.transport.Connection, arg1: boolean): void
}

        }
    }
}