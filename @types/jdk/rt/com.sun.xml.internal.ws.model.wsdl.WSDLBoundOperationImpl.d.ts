declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
                            class WSDLBoundOperationImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractExtensibleImpl implements com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation {
                                public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType, arg2: javax.xml.namespace.QName)
                                public getName(): javax.xml.namespace.QName
                                public getSOAPAction(): string
                                public setSoapAction(arg0: java.lang.String | string): void
                                public getPart(arg0: java.lang.String | string, arg1: javax.jws.WebParam$Mode): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPart
                                public addPart(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPart, arg1: javax.jws.WebParam$Mode): void
                                public getInputParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.ParameterBinding>
                                public getOutputParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.ParameterBinding>
                                public getFaultParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.ParameterBinding>
                                public getInParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPart>
                                public getOutParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPart>
                                public getFaults(): java.util.List<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundFault>
                                public addFault(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundFault): void
                                public getInputBinding(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.ParameterBinding
                                public getOutputBinding(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.ParameterBinding
                                public getFaultBinding(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.ParameterBinding
                                public getMimeTypeForInputPart(arg0: java.lang.String | string): string
                                public getMimeTypeForOutputPart(arg0: java.lang.String | string): string
                                public getMimeTypeForFaultPart(arg0: java.lang.String | string): string
                                public getOperation(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation
                                public getBoundPortType(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType
                                public setInputExplicitBodyParts(arg0: boolean): void
                                public setOutputExplicitBodyParts(arg0: boolean): void
                                public setFaultExplicitBodyParts(arg0: boolean): void
                                public setStyle(arg0: javax.jws.soap.SOAPBinding$Style): void
                                public getRequestPayloadName(): javax.xml.namespace.QName
                                public getResponsePayloadName(): javax.xml.namespace.QName
                                public getRequestNamespace(): string
                                public setRequestNamespace(arg0: java.lang.String | string): void
                                public getResponseNamespace(): string
                                public setResponseNamespace(arg0: java.lang.String | string): void
                                public freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel): void
                                public setAnonymous(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation$ANONYMOUS): void
                                public getAnonymous(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation$ANONYMOUS
                                public areRequiredExtensionsUnderstood(): boolean
                                public addNotUnderstoodExtension(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
                                public getNotUnderstoodExtensions(): java.util.List
                                public addExtension(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
                                public getExtension(arg0: java.lang.Class): com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension
                                public getFaults(): java.lang.Iterable
                                public getPart(arg0: java.lang.String | string, arg1: javax.jws.WebParam$Mode): com.sun.xml.internal.ws.api.model.wsdl.WSDLPart
                                public getBoundPortType(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
                                public getOperation(): com.sun.xml.internal.ws.api.model.wsdl.WSDLOperation
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}