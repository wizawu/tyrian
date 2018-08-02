declare namespace sun {
    namespace rmi {
        namespace transport {
interface Connection {
    getInputStream(): java.io.InputStream
    releaseInputStream(): void
    getOutputStream(): java.io.OutputStream
    releaseOutputStream(): void
    isReusable(): boolean
    close(): void
    getChannel(): sun.rmi.transport.Channel
}

        }
    }
}