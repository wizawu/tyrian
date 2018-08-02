declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
class RuntimeModeler {
    public static PD_JAXWS_PACKAGE_PD: string
    public static JAXWS_PACKAGE_PD: string
    public static RESPONSE: string
    public static RETURN: string
    public static BEAN: string
    public static SERVICE: string
    public static PORT: string
    public static HOLDER_CLASS: java.lang.Class
    public static REMOTE_EXCEPTION_CLASS: java.lang.Class<java.rmi.RemoteException>
    public static RUNTIME_EXCEPTION_CLASS: java.lang.Class<java.lang.RuntimeException>
    public static EXCEPTION_CLASS: java.lang.Class<java.lang.Exception>
    public static DecapitalizeExceptionBeanProperties: string
    public static SuppressDocLitWrapperGeneration: string
    public static DocWrappeeNamespapceQualified: string
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