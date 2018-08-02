declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            namespace validation {
                                class ValidatorHandlerImpl$ResolutionForwarder implements org.xml.sax.ext.EntityResolver2 {
                                    protected fEntityResolver: org.w3c.dom.ls.LSResourceResolver
                                    public constructor()
                                    public constructor(arg0: org.w3c.dom.ls.LSResourceResolver | org.w3c.dom.ls.LSResourceResolver$$Lambda)
                                    public setEntityResolver(arg0: org.w3c.dom.ls.LSResourceResolver | org.w3c.dom.ls.LSResourceResolver$$Lambda): void
                                    public getEntityResolver(): org.w3c.dom.ls.LSResourceResolver
                                    public getExternalSubset(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
                                    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): org.xml.sax.InputSource
                                    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
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