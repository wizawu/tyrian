declare namespace javax {
    namespace net {
        namespace ssl {
class SSLEngineResult {
    public constructor(arg0: javax.net.ssl.SSLEngineResult$Status, arg1: javax.net.ssl.SSLEngineResult$HandshakeStatus, arg2: int, arg3: int)
    public getStatus(): javax.net.ssl.SSLEngineResult$Status
    public getHandshakeStatus(): javax.net.ssl.SSLEngineResult$HandshakeStatus
    public bytesConsumed(): int
    public bytesProduced(): int
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}