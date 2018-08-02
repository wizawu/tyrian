declare namespace sun {
    namespace security {
        namespace ssl {
            class SSLEngineImpl extends javax.net.ssl.SSLEngine {
                public getHandshakeStatus(): javax.net.ssl.SSLEngineResult$HandshakeStatus
                public beginHandshake(): void
                public unwrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer[], arg2: int, arg3: int): javax.net.ssl.SSLEngineResult
                public wrap(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int, arg3: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
                public closeOutbound(): void
                public isOutboundDone(): boolean
                public closeInbound(): void
                public isInboundDone(): boolean
                public getSession(): javax.net.ssl.SSLSession
                public getHandshakeSession(): javax.net.ssl.SSLSession
                public getDelegatedTask(): java.lang.Runnable
                public setEnableSessionCreation(arg0: boolean): void
                public getEnableSessionCreation(): boolean
                public setNeedClientAuth(arg0: boolean): void
                public getNeedClientAuth(): boolean
                public setWantClientAuth(arg0: boolean): void
                public getWantClientAuth(): boolean
                public setUseClientMode(arg0: boolean): void
                public getUseClientMode(): boolean
                public getSupportedCipherSuites(): java.lang.String[]
                public setEnabledCipherSuites(arg0: java.lang.String[]): void
                public getEnabledCipherSuites(): java.lang.String[]
                public getSupportedProtocols(): java.lang.String[]
                public setEnabledProtocols(arg0: java.lang.String[]): void
                public getEnabledProtocols(): java.lang.String[]
                public getSSLParameters(): javax.net.ssl.SSLParameters
                public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}