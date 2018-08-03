declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace writer {
                            class WSDLGenerator {
                                public constructor(arg0: com.sun.xml.internal.ws.model.AbstractSEIModelImpl | com.sun.xml.internal.ws.model.AbstractSEIModelImpl$$Lambda, arg1: com.oracle.webservices.internal.api.databinding.WSDLResolver, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: com.sun.xml.internal.ws.api.server.Container, arg4: java.lang.Class, arg5: boolean, ...arg6: com.sun.xml.internal.ws.api.wsdl.writer.WSDLGeneratorExtension[])
                                public constructor(arg0: com.sun.xml.internal.ws.model.AbstractSEIModelImpl | com.sun.xml.internal.ws.model.AbstractSEIModelImpl$$Lambda, arg1: com.oracle.webservices.internal.api.databinding.WSDLResolver, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: com.sun.xml.internal.ws.api.server.Container, arg4: java.lang.Class, arg5: boolean, arg6: boolean, ...arg7: com.sun.xml.internal.ws.api.wsdl.writer.WSDLGeneratorExtension[])
                                public setEndpointAddress(arg0: java.lang.String | string): void
                                protected mangleName(arg0: java.lang.String | string): string
                                public doGeneration(): void
                                protected generateTypes(): void
                                protected generateMessages(): void
                                protected generateSOAPMessages(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl, arg1: com.sun.xml.internal.ws.api.model.soap.SOAPBinding): void
                                protected generatePortType(): void
                                protected isWrapperStyle(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl): boolean
                                protected isRpcLit(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl): boolean
                                protected generateParameterOrder(arg0: com.sun.xml.internal.ws.wsdl.writer.document.Operation, arg1: com.sun.xml.internal.ws.model.JavaMethodImpl): void
                                protected generateRpcParameterOrder(arg0: com.sun.xml.internal.ws.wsdl.writer.document.Operation, arg1: com.sun.xml.internal.ws.model.JavaMethodImpl): void
                                protected generateDocumentParameterOrder(arg0: com.sun.xml.internal.ws.wsdl.writer.document.Operation, arg1: com.sun.xml.internal.ws.model.JavaMethodImpl): void
                                protected sortMethodParameters(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl): java.util.List<com.sun.xml.internal.ws.model.ParameterImpl>
                                protected isBodyParameter(arg0: com.sun.xml.internal.ws.model.ParameterImpl): boolean
                                protected isHeaderParameter(arg0: com.sun.xml.internal.ws.model.ParameterImpl): boolean
                                protected isAttachmentParameter(arg0: com.sun.xml.internal.ws.model.ParameterImpl): boolean
                                protected generateBinding(): void
                                protected generateBindingOperation(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl, arg1: com.sun.xml.internal.ws.wsdl.writer.document.Binding): void
                                protected generateSOAP12BindingOperation(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl, arg1: com.sun.xml.internal.ws.wsdl.writer.document.Binding): void
                                protected splitParameters(arg0: java.util.List<com.sun.xml.internal.ws.model.ParameterImpl>, arg1: java.util.List<com.sun.xml.internal.ws.model.ParameterImpl>, arg2: java.util.List<com.sun.xml.internal.ws.model.ParameterImpl>): void
                                protected generateSOAPHeaders(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: java.util.List<com.sun.xml.internal.ws.model.ParameterImpl>, arg2: javax.xml.namespace.QName): void
                                protected generateSOAP12Headers(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: java.util.List<com.sun.xml.internal.ws.model.ParameterImpl>, arg2: javax.xml.namespace.QName): void
                                protected generateService(): void
                                protected generateInputMessage(arg0: com.sun.xml.internal.ws.wsdl.writer.document.Operation, arg1: com.sun.xml.internal.ws.model.JavaMethodImpl): void
                                protected generateOutputMessage(arg0: com.sun.xml.internal.ws.wsdl.writer.document.Operation, arg1: com.sun.xml.internal.ws.model.JavaMethodImpl): void
                                public createOutputFile(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.transform.Result
                                protected static relativize(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}