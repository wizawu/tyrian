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
                                        class XMLX509Digest extends com.sun.org.apache.xml.internal.security.utils.Signature11ElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent {
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: byte[], arg2: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.security.cert.X509Certificate, arg2: java.lang.String | string)
                                            public getAlgorithmAttr(): org.w3c.dom.Attr
                                            public getAlgorithm(): string
                                            public getDigestBytes(): byte[]
                                            public static getDigestBytesFromCert(arg0: java.security.cert.X509Certificate, arg1: java.lang.String | string): byte[]
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