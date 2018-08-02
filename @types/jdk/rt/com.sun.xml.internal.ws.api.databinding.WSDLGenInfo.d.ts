declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace databinding {
                            class WSDLGenInfo {
                                public constructor()
                                public getWsdlResolver(): com.oracle.webservices.internal.api.databinding.WSDLResolver
                                public setWsdlResolver(arg0: com.oracle.webservices.internal.api.databinding.WSDLResolver): void
                                public getContainer(): com.sun.xml.internal.ws.api.server.Container
                                public setContainer(arg0: com.sun.xml.internal.ws.api.server.Container): void
                                public isInlineSchemas(): boolean
                                public setInlineSchemas(arg0: boolean): void
                                public getExtensions(): com.sun.xml.internal.ws.api.wsdl.writer.WSDLGeneratorExtension[]
                                public setExtensions(arg0: com.sun.xml.internal.ws.api.wsdl.writer.WSDLGeneratorExtension[]): void
                                public setSecureXmlProcessingDisabled(arg0: boolean): void
                                public isSecureXmlProcessingDisabled(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}