declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
                            class EntityResolver2Wrapper implements com.sun.org.apache.xerces.internal.impl.ExternalSubsetResolver {
                                protected fEntityResolver: org.xml.sax.ext.EntityResolver2
                                public constructor()
                                public constructor(arg0: org.xml.sax.ext.EntityResolver2)
                                public setEntityResolver(arg0: org.xml.sax.ext.EntityResolver2): void
                                public getEntityResolver(): org.xml.sax.ext.EntityResolver2
                                public getExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLDTDDescription | com.sun.org.apache.xerces.internal.xni.grammars.XMLDTDDescription$$Lambda): com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
                                public resolveEntity(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier): com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}