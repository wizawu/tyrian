declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                class SSLContext {
                    protected constructor(arg0: com.sun.net.ssl.SSLContextSpi, arg1: java.security.Provider, arg2: java.lang.String | string)
                    public static getInstance(arg0: java.lang.String | string): com.sun.net.ssl.SSLContext
                    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.net.ssl.SSLContext
                    public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): com.sun.net.ssl.SSLContext
                    public getProtocol(): string
                    public getProvider(): java.security.Provider
                    public init(arg0: com.sun.net.ssl.KeyManager[], arg1: com.sun.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
                    public getSocketFactory(): javax.net.ssl.SSLSocketFactory
                    public getServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}