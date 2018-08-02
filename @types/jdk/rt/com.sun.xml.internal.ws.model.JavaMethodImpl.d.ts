declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        class JavaMethodImpl implements com.sun.xml.internal.ws.api.model.JavaMethod {
                            public constructor(arg0: com.sun.xml.internal.ws.model.AbstractSEIModelImpl, arg1: java.lang.reflect.Method, arg2: java.lang.reflect.Method, arg3: com.sun.xml.internal.ws.api.databinding.MetadataReader)
                            public getOperationSignature(): com.sun.xml.internal.ws.wsdl.ActionBasedOperationSignature
                            public getOwner(): com.sun.xml.internal.ws.api.model.SEIModel
                            public getMethod(): java.lang.reflect.Method
                            public getSEIMethod(): java.lang.reflect.Method
                            public getMEP(): com.sun.xml.internal.ws.api.model.MEP
                            public getBinding(): com.sun.xml.internal.ws.api.model.soap.SOAPBinding
                            public getOperation(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
                            public setOperationQName(arg0: javax.xml.namespace.QName): void
                            public getOperationQName(): javax.xml.namespace.QName
                            public getSOAPAction(): string
                            public getOperationName(): string
                            public getRequestMessageName(): string
                            public getResponseMessageName(): string
                            public setRequestPayloadName(arg0: javax.xml.namespace.QName): void
                            public getRequestPayloadName(): javax.xml.namespace.QName
                            public getResponsePayloadName(): javax.xml.namespace.QName
                            public getRequestParameters(): java.util.List<com.sun.xml.internal.ws.model.ParameterImpl>
                            public getResponseParameters(): java.util.List<com.sun.xml.internal.ws.model.ParameterImpl>
                            public getInputParametersCount(): int
                            public getCheckedException(arg0: java.lang.Class): com.sun.xml.internal.ws.model.CheckedExceptionImpl
                            public getCheckedExceptions(): java.util.List<com.sun.xml.internal.ws.model.CheckedExceptionImpl>
                            public getInputAction(): string
                            public getOutputAction(): string
                            public getCheckedException(arg0: com.sun.xml.internal.bind.api.TypeReference): com.sun.xml.internal.ws.model.CheckedExceptionImpl
                            public isAsync(): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}