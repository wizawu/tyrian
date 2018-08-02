declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
interface SEIModel {
    getMarshallerPool(): com.sun.xml.internal.ws.util.Pool$Marshaller
    getJAXBContext(): javax.xml.bind.JAXBContext
    getJavaMethod(arg0: java.lang.reflect.Method): com.sun.xml.internal.ws.api.model.JavaMethod
    getJavaMethod(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.JavaMethod
    getJavaMethodForWsdlOperation(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.JavaMethod
    getJavaMethods(): java.util.Collection<com.sun.xml.internal.ws.api.model.JavaMethod>
    getWSDLLocation(): string
    getServiceQName(): javax.xml.namespace.QName
    getPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
    getPortName(): javax.xml.namespace.QName
    getPortTypeName(): javax.xml.namespace.QName
    getBoundPortTypeName(): javax.xml.namespace.QName
    getTargetNamespace(): string
}

                        }
                    }
                }
            }
        }
    }
}