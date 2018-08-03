declare namespace javax {
    namespace net {
        namespace ssl {
            abstract class SSLServerSocket extends java.net.ServerSocket {
                protected constructor()
                protected constructor(arg0: int)
                protected constructor(arg0: int, arg1: int)
                protected constructor(arg0: int, arg1: int, arg2: java.net.InetAddress)
                public abstract getEnabledCipherSuites(): java.lang.String[]
                public abstract setEnabledCipherSuites(arg0: java.lang.String[]): void
                public abstract getSupportedCipherSuites(): java.lang.String[]
                public abstract getSupportedProtocols(): java.lang.String[]
                public abstract getEnabledProtocols(): java.lang.String[]
                public abstract setEnabledProtocols(arg0: java.lang.String[]): void
                public abstract setNeedClientAuth(arg0: boolean): void
                public abstract getNeedClientAuth(): boolean
                public abstract setWantClientAuth(arg0: boolean): void
                public abstract getWantClientAuth(): boolean
                public abstract setUseClientMode(arg0: boolean): void
                public abstract getUseClientMode(): boolean
                public abstract setEnableSessionCreation(arg0: boolean): void
                public abstract getEnableSessionCreation(): boolean
                public getSSLParameters(): javax.net.ssl.SSLParameters
                public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
                public static class: java.lang.Class<any>
            }
        }
    }
}