declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace parser {
                            class W3CAddressingMetadataWSDLParserExtension extends com.sun.xml.internal.ws.wsdl.parser.W3CAddressingWSDLParserExtension {
                                public constructor()
                                public bindingElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType, arg1: javax.xml.stream.XMLStreamReader): boolean
                                public portElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort, arg1: javax.xml.stream.XMLStreamReader): boolean
                                public bindingOperationElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
                                protected patchAnonymousDefault(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType): void
                                protected getNamespaceURI(): string
                                protected getWsdlActionTag(): javax.xml.namespace.QName
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}