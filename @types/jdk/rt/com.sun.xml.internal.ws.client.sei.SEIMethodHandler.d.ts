declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        namespace sei {
                            abstract class SEIMethodHandler extends com.sun.xml.internal.ws.client.sei.MethodHandler {
                                protected soapAction: string
                                protected isOneWay: boolean
                                protected javaMethod: com.sun.xml.internal.ws.model.JavaMethodImpl
                                protected checkedExceptions: java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.model.CheckedExceptionImpl>
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}