declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace keys {
                                namespace content {
                                    namespace x509 {
                                        class XMLX509SKI extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent {
                                            public static readonly SKI_OID: string
                                            public constructor(arg0: org.w3c.dom.Document, arg1: byte[])
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.security.cert.X509Certificate)
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                            public getSKIBytes(): byte[]
                                            public static getSKIBytesFromCert(arg0: java.security.cert.X509Certificate): byte[]
                                            public equals(arg0: java.lang.Object): boolean
                                            public hashCode(): int
                                            public getBaseLocalName(): string
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