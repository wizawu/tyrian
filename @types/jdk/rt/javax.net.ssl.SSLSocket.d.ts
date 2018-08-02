declare namespace javax {
    namespace net {
        namespace ssl {
            abstract class SSLSocket extends java.net.Socket {
                protected constructor()
                protected constructor(arg0: java.lang.String | string, arg1: int)
                protected constructor(arg0: java.net.InetAddress, arg1: int)
                protected constructor(arg0: java.lang.String | string, arg1: int, arg2: java.net.InetAddress, arg3: int)
                protected constructor(arg0: java.net.InetAddress, arg1: int, arg2: java.net.InetAddress, arg3: int)
                public getSupportedCipherSuites(): java.lang.String[]
                public getEnabledCipherSuites(): java.lang.String[]
                public setEnabledCipherSuites(arg0: java.lang.String[]): void
                public getSupportedProtocols(): java.lang.String[]
                public getEnabledProtocols(): java.lang.String[]
                public setEnabledProtocols(arg0: java.lang.String[]): void
                public getSession(): javax.net.ssl.SSLSession
                public getHandshakeSession(): javax.net.ssl.SSLSession
                public addHandshakeCompletedListener(arg0: javax.net.ssl.HandshakeCompletedListener): void
                public removeHandshakeCompletedListener(arg0: javax.net.ssl.HandshakeCompletedListener): void
                public startHandshake(): void
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