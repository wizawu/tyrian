declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace keys {
                                namespace keyresolver {
abstract class KeyResolverSpi {
    protected properties: java.util.Map<java.lang.String, java.lang.String>
    protected globalResolver: boolean
    protected secureValidation: boolean
    public constructor()
    public setSecureValidation(arg0: boolean): void
    public engineCanResolve(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): boolean
    public engineResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
    public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
    public engineResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
    public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
    public engineResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
    public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
    public engineLookupAndResolvePrivateKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PrivateKey
    public engineSetProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public engineGetProperty(arg0: java.lang.String | string): string
    public understandsProperty(arg0: java.lang.String | string): boolean
    public setGlobalResolver(arg0: boolean): void
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