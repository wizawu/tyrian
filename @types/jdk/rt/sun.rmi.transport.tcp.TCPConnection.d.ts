declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace tcp {
                class TCPConnection implements sun.rmi.transport.Connection {
                    public getOutputStream(): java.io.OutputStream
                    public releaseOutputStream(): void
                    public getInputStream(): java.io.InputStream
                    public releaseInputStream(): void
                    public isReusable(): boolean
                    public isDead(): boolean
                    public close(): void
                    public getChannel(): sun.rmi.transport.Channel
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}