declare namespace javax {
    namespace net {
        namespace ssl {
abstract class SSLEngine {
    protected constructor()
    protected constructor(arg0: java.lang.String | string, arg1: int)
    public getPeerHost(): string
    public getPeerPort(): int
    public wrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
    public wrap(arg0: java.nio.ByteBuffer[], arg1: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
    public wrap(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int, arg3: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
    public unwrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
    public unwrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer[]): javax.net.ssl.SSLEngineResult
    public unwrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer[], arg2: int, arg3: int): javax.net.ssl.SSLEngineResult
    public getDelegatedTask(): java.lang.Runnable
    public closeInbound(): void
    public isInboundDone(): boolean
    public closeOutbound(): void
    public isOutboundDone(): boolean
    public getSupportedCipherSuites(): java.lang.String[]
    public getEnabledCipherSuites(): java.lang.String[]
    public setEnabledCipherSuites(arg0: java.lang.String[]): void
    public getSupportedProtocols(): java.lang.String[]
    public getEnabledProtocols(): java.lang.String[]
    public setEnabledProtocols(arg0: java.lang.String[]): void
    public getSession(): javax.net.ssl.SSLSession
    public getHandshakeSession(): javax.net.ssl.SSLSession
    public beginHandshake(): void
    public getHandshakeStatus(): javax.net.ssl.SSLEngineResult$HandshakeStatus
    public setUseClientMode(arg0: boolean): void
    public getUseClientMode(): boolean
    public setNeedClientAuth(arg0: boolean): void
    public getNeedClientAuth(): boolean
    public setWantClientAuth(arg0: boolean): void
    public getWantClientAuth(): boolean
    public setEnableSessionCreation(arg0: boolean): void
    public getEnableSessionCreation(): boolean
    public getSSLParameters(): javax.net.ssl.SSLParameters
    public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
    public static class: java.lang.Class<any>
}

        }
    }
}