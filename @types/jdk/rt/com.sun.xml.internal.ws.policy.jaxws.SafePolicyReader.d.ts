declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        namespace jaxws {
                            class SafePolicyReader {
                                public constructor()
                                public readPolicyElement(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.String | string): com.sun.xml.internal.ws.policy.jaxws.SafePolicyReader$PolicyRecord
                                public getUrlsRead(): java.util.Set<java.lang.String>
                                public readPolicyReferenceElement(arg0: javax.xml.stream.XMLStreamReader): string
                                public static relativeToAbsoluteUrl(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}