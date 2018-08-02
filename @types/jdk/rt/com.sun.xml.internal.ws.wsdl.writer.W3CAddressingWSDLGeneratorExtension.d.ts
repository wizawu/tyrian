declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace writer {
                            class W3CAddressingWSDLGeneratorExtension extends com.sun.xml.internal.ws.api.wsdl.writer.WSDLGeneratorExtension {
                                public constructor()
                                public start(arg0: com.sun.xml.internal.ws.api.wsdl.writer.WSDLGenExtnContext): void
                                public addOperationInputExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
                                protected static getDefaultAction(arg0: com.sun.xml.internal.ws.api.model.JavaMethod): string
                                public addOperationOutputExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
                                public addOperationFaultExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod, arg2: com.sun.xml.internal.ws.api.model.CheckedException): void
                                public addBindingExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}