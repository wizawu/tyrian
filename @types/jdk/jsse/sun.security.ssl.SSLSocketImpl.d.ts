declare namespace sun {
    namespace security {
        namespace ssl {
            class SSLSocketImpl extends sun.security.ssl.BaseSSLSocketImpl {
                public connect(arg0: java.net.SocketAddress, arg1: int): void
                public startHandshake(): void
                public isClosed(): boolean
                protected closeSocket(): void
                public close(): void
                public setHost(arg0: java.lang.String | string): void
                public getInputStream(): java.io.InputStream
                public getOutputStream(): java.io.OutputStream
                public getSession(): javax.net.ssl.SSLSession
                public getHandshakeSession(): javax.net.ssl.SSLSession
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
                public setSoTimeout(arg0: int): void
                public addHandshakeCompletedListener(arg0: javax.net.ssl.HandshakeCompletedListener | javax.net.ssl.HandshakeCompletedListener$$Lambda): void
                public removeHandshakeCompletedListener(arg0: javax.net.ssl.HandshakeCompletedListener | javax.net.ssl.HandshakeCompletedListener$$Lambda): void
                public getSSLParameters(): javax.net.ssl.SSLParameters
                public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
                public toString(): string
                public setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
                public getRemoteSocketAddress(): java.net.SocketAddress
                public getLocalSocketAddress(): java.net.SocketAddress
                public bind(arg0: java.net.SocketAddress): void
                public static class: java.lang.Class<any>
            }
        }
    }
}