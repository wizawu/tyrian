declare namespace javax {
    namespace net {
        namespace ssl {
abstract class SSLServerSocket extends java.net.ServerSocket {
    protected constructor()
    protected constructor(arg0: int)
    protected constructor(arg0: int, arg1: int)
    protected constructor(arg0: int, arg1: int, arg2: java.net.InetAddress)
    public getEnabledCipherSuites(): java.lang.String[]
    public setEnabledCipherSuites(arg0: java.lang.String[]): void
    public getSupportedCipherSuites(): java.lang.String[]
    public getSupportedProtocols(): java.lang.String[]
    public getEnabledProtocols(): java.lang.String[]
    public setEnabledProtocols(arg0: java.lang.String[]): void
    public setNeedClientAuth(arg0: boolean): void
    public getNeedClientAuth(): boolean
    public setWantClientAuth(arg0: boolean): void
    public getWantClientAuth(): boolean
    public setUseClientMode(arg0: boolean): void
    public getUseClientMode(): boolean
    public setEnableSessionCreation(arg0: boolean): void
    public getEnableSessionCreation(): boolean
    public getSSLParameters(): javax.net.ssl.SSLParameters
    public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
    public static class: java.lang.Class<any>
}

        }
    }
}