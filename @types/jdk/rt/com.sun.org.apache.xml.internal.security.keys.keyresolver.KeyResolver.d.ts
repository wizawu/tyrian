declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace keys {
                                namespace keyresolver {
                                    class KeyResolver {
                                        public static length(): int
                                        public static getX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                        public static getPublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                        public static register(arg0: java.lang.String | string, arg1: boolean): void
                                        public static registerAtStart(arg0: java.lang.String | string, arg1: boolean): void
                                        public static register(arg0: com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi, arg1: boolean): void
                                        public static registerClassNames(arg0: java.util.List<java.lang.String>): void
                                        public static registerDefaultResolvers(): void
                                        public resolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                        public resolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                        public resolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                        public setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public getProperty(arg0: java.lang.String | string): string
                                        public understandsProperty(arg0: java.lang.String | string): boolean
                                        public resolverClassName(): string
                                        public static iterator(): java.util.Iterator<com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi>
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}