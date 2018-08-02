declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace parser {
                            class W3CAddressingWSDLParserExtension extends com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtension {
                                protected static COLON_DELIMITER: string
                                protected static SLASH_DELIMITER: string
                                public constructor()
                                public bindingElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType, arg1: javax.xml.stream.XMLStreamReader): boolean
                                public portElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort, arg1: javax.xml.stream.XMLStreamReader): boolean
                                public bindingOperationElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
                                public portTypeOperationInputAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLInput, arg1: javax.xml.stream.XMLStreamReader): void
                                public portTypeOperationOutputAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOutput, arg1: javax.xml.stream.XMLStreamReader): void
                                public portTypeOperationFaultAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault, arg1: javax.xml.stream.XMLStreamReader): void
                                public finished(arg0: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtensionContext): void
                                protected getNamespaceURI(): string
                                protected getWsdlActionTag(): javax.xml.namespace.QName
                                protected patchAnonymousDefault(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType): void
                                protected static buildAction(arg0: java.lang.String | string, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation, arg2: boolean): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}