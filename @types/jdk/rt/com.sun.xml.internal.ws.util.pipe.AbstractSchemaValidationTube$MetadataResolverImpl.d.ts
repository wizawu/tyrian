declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        namespace pipe {
                            class AbstractSchemaValidationTube$MetadataResolverImpl implements com.sun.xml.internal.ws.wsdl.SDDocumentResolver , org.w3c.dom.ls.LSResourceResolver {
                                public constructor(arg0: com.sun.xml.internal.ws.util.pipe.AbstractSchemaValidationTube)
                                public constructor(arg0: java.lang.Iterable<com.sun.xml.internal.ws.api.server.SDDocument>)
                                public resolve(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.server.SDDocument
                                public resolveResource(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): org.w3c.dom.ls.LSInput
                                public static class: java.lang.Class<any>
                            }
                            class AbstractSchemaValidationTube$MetadataResolverImpl$$Lambda implements com.sun.xml.internal.ws.wsdl.SDDocumentResolver , org.w3c.dom.ls.LSResourceResolver {
                                public constructor(arg0: com.sun.xml.internal.ws.util.pipe.AbstractSchemaValidationTube)
                            }
                        }
                    }
                }
            }
        }
    }
}