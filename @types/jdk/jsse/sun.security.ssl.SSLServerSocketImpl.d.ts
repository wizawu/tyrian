declare namespace sun {
    namespace security {
        namespace ssl {
            class SSLServerSocketImpl extends javax.net.ssl.SSLServerSocket {
                public getSupportedCipherSuites(): java.lang.String[]
                public getEnabledCipherSuites(): java.lang.String[]
                public setEnabledCipherSuites(arg0: java.lang.String[]): void
                public getSupportedProtocols(): java.lang.String[]
                public setEnabledProtocols(arg0: java.lang.String[]): void
                public getEnabledProtocols(): java.lang.String[]
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
                public accept(): java.net.Socket
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}