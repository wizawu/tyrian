declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                interface WSDLBoundOperation extends com.sun.xml.internal.ws.api.model.wsdl.WSDLObject , com.sun.xml.internal.ws.api.model.wsdl.WSDLExtensible {
                                    getName(): javax.xml.namespace.QName
                                    getSOAPAction(): string
                                    getOperation(): com.sun.xml.internal.ws.api.model.wsdl.WSDLOperation
                                    getBoundPortType(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
                                    getAnonymous(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation$ANONYMOUS
                                    getPart(arg0: java.lang.String | string, arg1: javax.jws.WebParam$Mode): com.sun.xml.internal.ws.api.model.wsdl.WSDLPart
                                    getInputBinding(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.ParameterBinding
                                    getOutputBinding(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.ParameterBinding
                                    getFaultBinding(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.ParameterBinding
                                    getMimeTypeForInputPart(arg0: java.lang.String | string): string
                                    getMimeTypeForOutputPart(arg0: java.lang.String | string): string
                                    getMimeTypeForFaultPart(arg0: java.lang.String | string): string
                                    getInParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.wsdl.WSDLPart>
                                    getOutParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.wsdl.WSDLPart>
                                    getFaults(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundFault>
                                    getInputParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.ParameterBinding>
                                    getOutputParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.ParameterBinding>
                                    getFaultParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.ParameterBinding>
                                    getRequestPayloadName(): javax.xml.namespace.QName
                                    getResponsePayloadName(): javax.xml.namespace.QName
                                    getRequestNamespace(): string
                                    getResponseNamespace(): string
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}