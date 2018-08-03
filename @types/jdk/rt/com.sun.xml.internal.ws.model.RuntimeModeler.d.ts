declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        class RuntimeModeler {
                            public static readonly PD_JAXWS_PACKAGE_PD: string
                            public static readonly JAXWS_PACKAGE_PD: string
                            public static readonly RESPONSE: string
                            public static readonly RETURN: string
                            public static readonly BEAN: string
                            public static readonly SERVICE: string
                            public static readonly PORT: string
                            public static readonly HOLDER_CLASS: java.lang.Class
                            public static readonly REMOTE_EXCEPTION_CLASS: java.lang.Class<java.rmi.RemoteException>
                            public static readonly RUNTIME_EXCEPTION_CLASS: java.lang.Class<java.lang.RuntimeException>
                            public static readonly EXCEPTION_CLASS: java.lang.Class<java.lang.Exception>
                            public static readonly DecapitalizeExceptionBeanProperties: string
                            public static readonly SuppressDocLitWrapperGeneration: string
                            public static readonly DocWrappeeNamespapceQualified: string
                            public constructor(arg0: com.sun.xml.internal.ws.api.databinding.DatabindingConfig)
                            public setClassLoader(arg0: java.lang.ClassLoader): void
                            public setPortName(arg0: javax.xml.namespace.QName): void
                            public buildRuntimeModel(): com.sun.xml.internal.ws.model.AbstractSEIModelImpl
                            protected determineWebMethodUse(arg0: java.lang.Class): void
                            protected createBinding(arg0: javax.jws.soap.SOAPBinding): com.sun.xml.internal.ws.model.soap.SOAPBindingImpl
                            public static getNamespace(arg0: java.lang.String | string): string
                            protected processDocWrappedMethod(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.reflect.Method): void
                            protected processRpcMethod(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.reflect.Method): void
                            protected processExceptions(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl, arg1: java.lang.reflect.Method): void
                            protected getWSDLExceptionFaultInfo(arg0: java.lang.Class): java.lang.reflect.Method
                            protected processDocBareMethod(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl, arg1: java.lang.String | string, arg2: java.lang.reflect.Method): void
                            public static capitalize(arg0: java.lang.String | string): string
                            public static getServiceName(arg0: java.lang.Class<any>): javax.xml.namespace.QName
                            public static getServiceName(arg0: java.lang.Class<any>, arg1: boolean): javax.xml.namespace.QName
                            public static getServiceName(arg0: java.lang.Class<any>, arg1: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
                            public static getServiceName(arg0: java.lang.Class<any>, arg1: com.sun.xml.internal.ws.api.databinding.MetadataReader, arg2: boolean): javax.xml.namespace.QName
                            public static getPortName(arg0: java.lang.Class<any>, arg1: java.lang.String | string): javax.xml.namespace.QName
                            public static getPortName(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: boolean): javax.xml.namespace.QName
                            public static getPortName(arg0: java.lang.Class<any>, arg1: com.sun.xml.internal.ws.api.databinding.MetadataReader, arg2: java.lang.String | string): javax.xml.namespace.QName
                            public static getPortName(arg0: java.lang.Class<any>, arg1: com.sun.xml.internal.ws.api.databinding.MetadataReader, arg2: java.lang.String | string, arg3: boolean): javax.xml.namespace.QName
                            public static getPortTypeName(arg0: java.lang.Class<any>): javax.xml.namespace.QName
                            public static getPortTypeName(arg0: java.lang.Class<any>, arg1: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
                            public static getPortTypeName(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}