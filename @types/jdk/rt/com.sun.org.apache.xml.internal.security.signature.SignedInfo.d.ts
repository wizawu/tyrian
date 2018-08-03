declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace signature {
                                class SignedInfo extends com.sun.org.apache.xml.internal.security.signature.Manifest {
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.Element, arg2: org.w3c.dom.Element)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: boolean)
                                    public verify(): boolean
                                    public verify(arg0: boolean): boolean
                                    public getCanonicalizedOctetStream(): byte[]
                                    public signInOctetStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    public getCanonicalizationMethodURI(): string
                                    public getSignatureMethodURI(): string
                                    public getSignatureMethodElement(): org.w3c.dom.Element
                                    public createSecretKey(arg0: byte[]): javax.crypto.SecretKey
                                    protected getSignatureAlgorithm(): com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithm
                                    public getBaseLocalName(): string
                                    public getInclusiveNamespaces(): string
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