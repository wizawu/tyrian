declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace keys {
                                namespace keyresolver {
                                    namespace implementations {
                                        class PrivateKeyResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor(arg0: java.security.KeyStore, arg1: char[])
                                            public engineCanResolve(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): boolean
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public engineLookupAndResolvePrivateKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PrivateKey
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
}