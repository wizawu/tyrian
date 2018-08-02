declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace databinding {
                            class MappingInfo {
                                protected targetNamespace: string
                                protected databindingMode: string
                                protected soapBodyStyle: com.sun.xml.internal.ws.api.databinding.SoapBodyStyle
                                protected bindingID: com.sun.xml.internal.ws.api.BindingID
                                protected serviceName: javax.xml.namespace.QName
                                protected portName: javax.xml.namespace.QName
                                protected defaultSchemaNamespaceSuffix: string
                                public constructor()
                                public getTargetNamespace(): string
                                public setTargetNamespace(arg0: java.lang.String | string): void
                                public getDatabindingMode(): string
                                public setDatabindingMode(arg0: java.lang.String | string): void
                                public getSoapBodyStyle(): com.sun.xml.internal.ws.api.databinding.SoapBodyStyle
                                public setSoapBodyStyle(arg0: com.sun.xml.internal.ws.api.databinding.SoapBodyStyle): void
                                public getBindingID(): com.sun.xml.internal.ws.api.BindingID
                                public setBindingID(arg0: com.sun.xml.internal.ws.api.BindingID): void
                                public getServiceName(): javax.xml.namespace.QName
                                public setServiceName(arg0: javax.xml.namespace.QName): void
                                public getPortName(): javax.xml.namespace.QName
                                public setPortName(arg0: javax.xml.namespace.QName): void
                                public getDefaultSchemaNamespaceSuffix(): string
                                public setDefaultSchemaNamespaceSuffix(arg0: java.lang.String | string): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}