declare namespace javax {
    namespace net {
        namespace ssl {
            class TrustManagerFactory {
                public static getDefaultAlgorithm(): string
                protected constructor(arg0: javax.net.ssl.TrustManagerFactorySpi, arg1: java.security.Provider, arg2: java.lang.String | string)
                public getAlgorithm(): string
                public static getInstance(arg0: java.lang.String | string): javax.net.ssl.TrustManagerFactory
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.net.ssl.TrustManagerFactory
                public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.net.ssl.TrustManagerFactory
                public getProvider(): java.security.Provider
                public init(arg0: java.security.KeyStore): void
                public init(arg0: javax.net.ssl.ManagerFactoryParameters): void
                public getTrustManagers(): javax.net.ssl.TrustManager[]
                public static class: java.lang.Class<any>
            }
        }
    }
}