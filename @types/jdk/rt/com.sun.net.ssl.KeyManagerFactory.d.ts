declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                class KeyManagerFactory {
                    public static getDefaultAlgorithm(): string
                    protected constructor(arg0: com.sun.net.ssl.KeyManagerFactorySpi, arg1: java.security.Provider, arg2: java.lang.String | string)
                    public getAlgorithm(): string
                    public static getInstance(arg0: java.lang.String | string): com.sun.net.ssl.KeyManagerFactory
                    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.net.ssl.KeyManagerFactory
                    public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): com.sun.net.ssl.KeyManagerFactory
                    public getProvider(): java.security.Provider
                    public init(arg0: java.security.KeyStore, arg1: char[]): void
                    public getKeyManagers(): com.sun.net.ssl.KeyManager[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}