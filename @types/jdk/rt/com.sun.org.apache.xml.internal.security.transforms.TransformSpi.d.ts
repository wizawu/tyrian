declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace transforms {
                                abstract class TransformSpi {
                                    public constructor()
                                    protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    protected engineGetURI(): string
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