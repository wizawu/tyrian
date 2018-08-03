declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        abstract class WSService extends javax.xml.ws.spi.ServiceDelegate implements com.sun.xml.internal.ws.api.ComponentRegistry {
                            protected static INIT_PARAMS: java.lang.ThreadLocal<com.sun.xml.internal.ws.api.WSService$InitParams>
                            protected static EMPTY_PARAMS: com.sun.xml.internal.ws.api.WSService$InitParams
                            protected constructor()
                            public getPort<T>(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
                            public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg2: java.lang.Class<T>, arg3: javax.xml.ws.Service$Mode, ...arg4: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
                            public createDispatch(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg2: javax.xml.bind.JAXBContext, arg3: javax.xml.ws.Service$Mode, ...arg4: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object>
                            public getContainer(): com.sun.xml.internal.ws.api.server.Container
                            public getSPI<S>(arg0: java.lang.Class<S>): S
                            public getComponents<S>(): java.util.Set<com.sun.xml.internal.ws.api.Component>
                            public static create<S>(arg0: java.net.URL, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSService
                            public static create<S>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSService
                            public static create<S>(): com.sun.xml.internal.ws.api.WSService
                            public static create<S>(arg0: java.net.URL, arg1: javax.xml.namespace.QName, arg2: com.sun.xml.internal.ws.api.WSService$InitParams): javax.xml.ws.Service
                            public static unwrap<S>(arg0: javax.xml.ws.Service): com.sun.xml.internal.ws.api.WSService
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}