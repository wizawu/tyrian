declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                class TrustManagerFactory {
                    public static getDefaultAlgorithm(): string
                    protected constructor(arg0: com.sun.net.ssl.TrustManagerFactorySpi, arg1: java.security.Provider, arg2: java.lang.String | string)
                    public getAlgorithm(): string
                    public static getInstance(arg0: java.lang.String | string): com.sun.net.ssl.TrustManagerFactory
                    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.net.ssl.TrustManagerFactory
                    public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): com.sun.net.ssl.TrustManagerFactory
                    public getProvider(): java.security.Provider
                    public init(arg0: java.security.KeyStore): void
                    public getTrustManagers(): com.sun.net.ssl.TrustManager[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}