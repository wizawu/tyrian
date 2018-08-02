declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
                            class WSDLOperationImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractExtensibleImpl implements com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation {
                                protected messages: java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage>
                                public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType, arg2: javax.xml.namespace.QName)
                                public getName(): javax.xml.namespace.QName
                                public getParameterOrder(): string
                                public setParameterOrder(arg0: java.lang.String | string): void
                                public getInput(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLInput
                                public setInput(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLInput): void
                                public getOutput(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOutput
                                public isOneWay(): boolean
                                public setOutput(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOutput): void
                                public getFaults(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault>
                                public getFault(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault
                                public getPortTypeName(): javax.xml.namespace.QName
                                public addFault(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault): void
                                public freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel): void
                                public areRequiredExtensionsUnderstood(): boolean
                                public addNotUnderstoodExtension(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
                                public getNotUnderstoodExtensions(): java.util.List
                                public addExtension(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
                                public getExtension(arg0: java.lang.Class): com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension
                                public getFault(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLFault
                                public getOutput(): com.sun.xml.internal.ws.api.model.wsdl.WSDLOutput
                                public getInput(): com.sun.xml.internal.ws.api.model.wsdl.WSDLInput
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}