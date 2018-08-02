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
class EncryptedKeyResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.security.Key)
    public registerInternalKeyResolver(arg0: com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi): void
    public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
    public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
    public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
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