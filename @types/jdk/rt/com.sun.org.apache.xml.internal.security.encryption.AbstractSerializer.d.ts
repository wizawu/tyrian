declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
                                abstract class AbstractSerializer implements com.sun.org.apache.xml.internal.security.encryption.Serializer {
                                    protected canon: com.sun.org.apache.xml.internal.security.c14n.Canonicalizer
                                    public constructor()
                                    public setCanonicalizer(arg0: com.sun.org.apache.xml.internal.security.c14n.Canonicalizer): void
                                    public serialize(arg0: org.w3c.dom.Element): string
                                    public serializeToByteArray(arg0: org.w3c.dom.Element): byte[]
                                    public serialize(arg0: org.w3c.dom.NodeList): string
                                    public serializeToByteArray(arg0: org.w3c.dom.NodeList): byte[]
                                    public canonSerialize(arg0: org.w3c.dom.Node): string
                                    public canonSerializeToByteArray(arg0: org.w3c.dom.Node): byte[]
                                    public deserialize(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                    public deserialize(arg0: byte[], arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                    protected static createContext(arg0: byte[], arg1: org.w3c.dom.Node): byte[]
                                    protected static createContext(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): string
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