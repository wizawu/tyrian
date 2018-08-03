declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            abstract class HttpAdapterList<T extends com.sun.xml.internal.ws.transport.http.HttpAdapter> extends java.util.AbstractList<T> implements com.sun.xml.internal.ws.transport.http.DeploymentDescriptorParser$AdapterFactory<T> {
                                public constructor()
                                public createAdapter(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.server.WSEndpoint<any>): T
                                protected abstract createHttpAdapter(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.server.WSEndpoint<any>): T
                                public createPortAddressResolver(arg0: java.lang.String | string, arg1: java.lang.Class<any>): com.sun.xml.internal.ws.api.server.PortAddressResolver
                                public get(arg0: int): T
                                public size(): int
                                public get(arg0: int): java.lang.Object
                                public createAdapter(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.server.WSEndpoint): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                            interface HttpAdapterList$$Lambda<T extends com.sun.xml.internal.ws.transport.http.HttpAdapter> extends java.util.AbstractList<T> implements com.sun.xml.internal.ws.transport.http.DeploymentDescriptorParser$AdapterFactory<T> {
                                (arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.server.WSEndpoint<any>): T
                            }
                        }
                    }
                }
            }
        }
    }
}