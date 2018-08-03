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
                public abstract wrap(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int, arg3: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
                public unwrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
                public unwrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer[]): javax.net.ssl.SSLEngineResult
                public abstract unwrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer[], arg2: int, arg3: int): javax.net.ssl.SSLEngineResult
                public abstract getDelegatedTask(): java.lang.Runnable
                public abstract closeInbound(): void
                public abstract isInboundDone(): boolean
                public abstract closeOutbound(): void
                public abstract isOutboundDone(): boolean
                public abstract getSupportedCipherSuites(): java.lang.String[]
                public abstract getEnabledCipherSuites(): java.lang.String[]
                public abstract setEnabledCipherSuites(arg0: java.lang.String[]): void
                public abstract getSupportedProtocols(): java.lang.String[]
                public abstract getEnabledProtocols(): java.lang.String[]
                public abstract setEnabledProtocols(arg0: java.lang.String[]): void
                public abstract getSession(): javax.net.ssl.SSLSession
                public getHandshakeSession(): javax.net.ssl.SSLSession
                public abstract beginHandshake(): void
                public abstract getHandshakeStatus(): javax.net.ssl.SSLEngineResult$HandshakeStatus
                public abstract setUseClientMode(arg0: boolean): void
                public abstract getUseClientMode(): boolean
                public abstract setNeedClientAuth(arg0: boolean): void
                public abstract getNeedClientAuth(): boolean
                public abstract setWantClientAuth(arg0: boolean): void
                public abstract getWantClientAuth(): boolean
                public abstract setEnableSessionCreation(arg0: boolean): void
                public abstract getEnableSessionCreation(): boolean
                public getSSLParameters(): javax.net.ssl.SSLParameters
                public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
                public static class: java.lang.Class<any>
            }
        }
    }
}