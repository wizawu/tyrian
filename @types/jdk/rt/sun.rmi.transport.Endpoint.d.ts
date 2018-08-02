declare namespace sun {
    namespace rmi {
        namespace transport {
interface Endpoint {
    getChannel(): sun.rmi.transport.Channel
    exportObject(arg0: sun.rmi.transport.Target): void
    getInboundTransport(): sun.rmi.transport.Transport
    getOutboundTransport(): sun.rmi.transport.Transport
}

        }
    }
}