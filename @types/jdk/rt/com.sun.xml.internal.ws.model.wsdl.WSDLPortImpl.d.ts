declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
                            class WSDLPortImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractFeaturedObjectImpl implements com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort {
                                public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService, arg2: javax.xml.namespace.QName, arg3: javax.xml.namespace.QName)
                                public getName(): javax.xml.namespace.QName
                                public getBindingName(): javax.xml.namespace.QName
                                public getAddress(): com.sun.xml.internal.ws.api.EndpointAddress
                                public getOwner(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService
                                public setAddress(arg0: com.sun.xml.internal.ws.api.EndpointAddress): void
                                public setEPR(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference): void
                                public getEPR(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public getBinding(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType
                                public freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel): void
                                public getFeature(arg0: java.lang.Class): javax.xml.ws.WebServiceFeature
                                public getFeatures(): com.sun.xml.internal.ws.binding.WebServiceFeatureList
                                public areRequiredExtensionsUnderstood(): boolean
                                public addNotUnderstoodExtension(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
                                public getNotUnderstoodExtensions(): java.util.List
                                public addExtension(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
                                public getExtension(arg0: java.lang.Class): com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension
                                public getOwner(): com.sun.xml.internal.ws.api.model.wsdl.WSDLService
                                public getBinding(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}